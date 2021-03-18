/*!
 * American Well Visit Console Widget
 *
 * Copyright © 2019 American Well.
 * All rights reserved.
 *
 * It is illegal to use, reproduce or distribute
 * any part of this Intellectual Property without
 * prior written authorization from American Well.
 */
import { h } from "@stencil/core";
import compareVersions from 'compare-versions';
import replace from 'awcoresdk/lib/util/replace';
import DrawerHeader from "./drawer-header";
import DrawerButton from "./drawer-button";
import ChatIcon from './svgs/chat-icon';
import NotesIcon from './svgs/notes-icon';
import InviteIcon from './svgs/invite-icon';
import Modal from "./modal";
import defaultMessages from "./messages.default";
import ReloadIcon from "./svgs/reload-icon";
import TytoIcon from "./svgs/tyto-icon";
/**
 * The American Well visit console widget.
 */
export class VisitConsole {
    constructor() {
        this.messages = defaultMessages;
    }
    async onVisitEndListener() {
        await this.destroy();
    }
    onVisitUpdatedListener(event) {
        this.visit = event.detail.visit;
        this.chatWindow.visit = event.detail.visit;
        this.visitNotes.visit = event.detail.visit;
        this.guestInvite.visit = event.detail.visit;
        this.timeRemaining = this.msToTime(this.visit.timeRemainingMilliseconds);
        if (this.visit.paidExtensionOffered && this.visit.longExtensionEntity && !this.extensionOfferAcceptedOrRejected) {
            this.showVisitExtensionModal = true;
        }
    }
    onVisitErrorListener() {
        // As of right now just passing this event through without doing anything
    }
    newMessagesReceivedListener() {
        if (this.activeDrawerName !== 'chat' || (this.activeDrawerName === 'chat' && !this.isDrawerOpen)) {
            this.showChatNotification = true;
        }
    }
    newNotesReceivedListener() {
        if (this.activeDrawerName !== 'notes' || (this.activeDrawerName === 'notes' && !this.isDrawerOpen)) {
            this.showNotesNotification = true;
        }
    }
    /**
     *
     * The initialize function for this widget.
     *
     * Requires an initialized SDK instance and an options object with an PreVisitScreening or InProgress Visit.
     *
     * + `visit`: a PreVisitScreening or InProgress AWSDKVisit instance to use in the WebRTC video experience.
     * + `disableHeader`: set to `true` if the header portion of the visit console should be disabled.
     * + `disableSidebar`: set to `true` if the sidebar portion of the visit console should be disabled.
     * + `messages`: an object of localized string messages.
     * + `locale`: the locale of the visit console i.e. `en-US`.
     *
     */
    async initialize(sdk, options) {
        const validationResult = await this.validateInitialize(sdk, options);
        if (validationResult) {
            return validationResult;
        }
        this.active = true;
        this.sdk = sdk;
        this.systemConfiguration = sdk.getSystemConfiguration();
        this.visit = options.visit;
        this.isHeaderDisabled = options.disableHeader;
        this.isSidebarDisabled = options.disableSidebar;
        // copy over whatever messages are provided to us
        this.messages = Object.assign({}, defaultMessages, options.messages);
        // try to convert the locale to be more BCP 47 locale matcher friendly:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
        options.locale = options.locale && options.locale.replace('_', '-');
        this.locale = options.locale;
        return this.videoConsole.initialize(this.sdk, options)
            .then(() => this.visitNotes.initialize(this.sdk, options))
            .then(() => this.chatWindow.initialize(this.sdk, options))
            .then(() => this.guestInvite.initialize(this.sdk, options))
            .then(() => this.tytoDevice.initialize(this.sdk, options));
    }
    async validateInitialize(sdk, options) {
        if (!sdk) {
            return Promise.reject('AWSDK is null or undefined');
        }
        const match = sdk.version && sdk.version.match(/(\d\.\d\.\d)/);
        if (!match || compareVersions.compare(match[0], '3.1.0', '<')) {
            return Promise.reject('AWSDK must be at least version 3.1.0 or greater');
        }
        if (!options.visit) {
            return Promise.reject('AWSDKVisit is null or undefined');
        }
        if (!options.visit.disposition
            || (!options.visit.disposition.toString().includes('PreVisitScreening')
                && !options.visit.disposition.toString().includes('InProgress'))) {
            return Promise.reject('AWSDKVisit must have disposition PreVisitScreening or InProgress');
        }
    }
    async destroy() {
        this.active = false;
        this.sdk = null;
        this.visit = null;
        this.activeDrawerName = null;
        this.isDrawerOpen = false;
        this.showChatNotification = false;
        this.showNotesNotification = false;
        this.systemConfiguration = null;
        this.showVisitExtensionModal = false;
        this.extensionOfferAcceptedOrRejected = false;
        this.timeRemaining = null;
        return this.videoConsole.destroy()
            .then(() => this.visitNotes.destroy())
            .then(() => this.chatWindow.destroy())
            .then(() => this.guestInvite.destroy());
    }
    msToTime(ms = 0) {
        const s = ms / 1000;
        const min = Math.floor(s / 60).toString().padStart(2, '0');
        const sec = Math.floor(s % 60).toString().padStart(2, '0');
        return `${min}:${sec}`;
    }
    toggleDrawer(drawerName) {
        if (this.activeDrawerName === drawerName) {
            this.isDrawerOpen = !this.isDrawerOpen;
        }
        else {
            this.activeDrawerName = drawerName;
            this.isDrawerOpen = true;
        }
        if (this.activeDrawerName === 'chat') {
            this.showChatNotification = false;
        }
        if (this.activeDrawerName === 'notes') {
            this.showNotesNotification = false;
        }
    }
    acceptVisitExtension(accepted) {
        this.extensionOfferAcceptedOrRejected = true;
        this.sdk.visitService.acceptPaidVisitExtension(this.visit, accepted)
            .then(() => {
            this.showVisitExtensionModal = false;
        })
            .catch(() => { });
    }
    render() {
        const showChat = !this.isSidebarDisabled && this.systemConfiguration && !this.systemConfiguration.alwaysHideChatTabEnabled;
        const showNotes = !this.isSidebarDisabled && this.systemConfiguration && !this.systemConfiguration.alwaysHideNotesTabEnabled;
        const showInvite = !this.isSidebarDisabled && this.systemConfiguration && this.systemConfiguration.multipleVideoParticipantsEnabled;
        const showTytoDrawer = !this.isSidebarDisabled && this.visit && this.visit.tytoLiveStreamingEnabled;
        const isChatOpen = showChat && this.isDrawerOpen && this.activeDrawerName === 'chat';
        const isNotesOpen = showNotes && this.isDrawerOpen && this.activeDrawerName === 'notes';
        const isInviteOpen = showInvite && this.isDrawerOpen && this.activeDrawerName === 'invite';
        const isTytoOpen = showTytoDrawer && this.isDrawerOpen && this.activeDrawerName === 'tyto';
        const hideSideBar = this.isSidebarDisabled || (!showChat && !showNotes && !showInvite && !showTytoDrawer);
        return (h("div", { class: {
                "visit-container": true,
                "hidden": !this.visit || !this.active,
                "header-disabled": this.isHeaderDisabled,
                "header-enabled": !this.isHeaderDisabled,
                "sidebar-disabled": hideSideBar,
                "sidebar-enabled": !hideSideBar,
                "drawer-open": this.isDrawerOpen,
                "bottom-drawer-open": this.isBottomDrawerOpen
            }, dir: document.documentElement.dir },
            h("div", { class: "visit-header" },
                h("div", { class: "logo-container" },
                    h("slot", { name: "logo" }))),
            h("div", { class: "visit-timer" }, this.visit && !this.visit.hidePatientTimer && this.timeRemaining &&
                h("span", null, this.timeRemaining)),
            h("div", { class: "visit-body" },
                h("div", { class: { 'visit-sidebar': true, 'side-shadow': !this.isDrawerOpen } },
                    showChat &&
                        h(DrawerButton, { name: this.messages.amwell_visit_console_chat_button_text, className: 'chat-button', selected: isChatOpen, showNotificationDot: this.showChatNotification, onClick: () => this.toggleDrawer('chat') },
                            h(ChatIcon, null)),
                    showNotes &&
                        h(DrawerButton, { name: this.messages.amwell_visit_console_notes_button_text, className: 'notes-button', selected: isNotesOpen, showNotificationDot: this.showNotesNotification, onClick: () => this.toggleDrawer('notes') },
                            h(NotesIcon, null)),
                    showInvite &&
                        h(DrawerButton, { name: this.messages.amwell_visit_console_invite_button_text, className: 'invite-button', selected: isInviteOpen, onClick: () => this.toggleDrawer('invite') },
                            h(InviteIcon, null)),
                    showTytoDrawer &&
                        h(DrawerButton, { name: this.messages.amwell_visit_console_drawer_tyto_button_text, className: 'tyto-button', selected: isTytoOpen, onClick: () => this.toggleDrawer('tyto') },
                            h(TytoIcon, null))),
                h("div", { class: "bottom-drawer" },
                    h("div", { class: "bottom-drawer-button", onClick: () => this.isBottomDrawerOpen = !this.isBottomDrawerOpen }),
                    h("div", { class: "bottom-drawer-content" },
                        h("div", { class: "bottom-drawer-buttons" },
                            showChat &&
                                h(DrawerButton, { name: this.messages.amwell_visit_console_chat_button_text, className: 'chat-button', showNotificationDot: this.showChatNotification, onClick: () => this.toggleDrawer('chat') },
                                    h(ChatIcon, null)),
                            showNotes &&
                                h(DrawerButton, { name: this.messages.amwell_visit_console_notes_button_text, className: 'notes-button', showNotificationDot: this.showNotesNotification, onClick: () => this.toggleDrawer('notes') },
                                    h(NotesIcon, null)),
                            showInvite &&
                                h(DrawerButton, { name: this.messages.amwell_visit_console_invite_button_text, className: 'invite-button', onClick: () => this.toggleDrawer('invite') },
                                    h(InviteIcon, null)),
                            h(DrawerButton, { name: this.messages.amwell_visit_console_reload_button_text, className: 'reload-button', onClick: () => this.videoConsole.refresh() },
                                h(ReloadIcon, null)),
                            showTytoDrawer &&
                                h(DrawerButton, { name: this.messages.amwell_visit_console_drawer_tyto_button_text, className: 'tyto-button', onClick: () => this.toggleDrawer('tyto') },
                                    h(TytoIcon, null))))),
                h("div", { class: { 'visit-drawer': true, 'side-shadow': true, 'hidden': !this.isDrawerOpen } },
                    h("div", { class: { 'drawer-content': true, 'chat-drawer': true, 'hidden': this.activeDrawerName !== 'chat' } },
                        h(DrawerHeader, { onCloseClicked: () => this.isDrawerOpen = false, name: this.messages.amwell_visit_console_drawer_chat_title }),
                        h("amwell-chat-window", { ref: (el) => this.chatWindow = el })),
                    h("div", { class: { 'drawer-content': true, 'notes-drawer': true, 'hidden': this.activeDrawerName !== 'notes' } },
                        h(DrawerHeader, { onCloseClicked: () => this.isDrawerOpen = false, name: this.messages.amwell_visit_console_drawer_notes_title }),
                        h("amwell-visit-notes", { ref: (el) => this.visitNotes = el })),
                    h("div", { class: { 'drawer-content': true, 'invite-drawer': true, 'hidden': this.activeDrawerName !== 'invite' } },
                        h(DrawerHeader, { onCloseClicked: () => this.isDrawerOpen = false, name: this.messages.amwell_visit_console_drawer_invite_title }),
                        h("amwell-guest-invite", { ref: (el) => this.guestInvite = el })),
                    h("div", { class: { 'drawer-content': true, 'tyto-device': true, 'hidden': this.activeDrawerName !== 'tyto' } },
                        h(DrawerHeader, { onCloseClicked: () => this.isDrawerOpen = false, name: this.messages.amwell_visit_console_drawer_tyto_header_text }),
                        h("amwell-tyto-device", { ref: (el) => this.tytoDevice = el }))),
                h("amwell-video-console", { class: "video-console", ref: (el) => this.videoConsole = el })),
            this.visit && this.visit.longExtensionEntity && this.systemConfiguration &&
                h(Modal, { isOpen: this.showVisitExtensionModal, title: this.messages.amwell_visit_console_visit_extension_title, message: replace(this.messages.amwell_visit_console_visit_extension_message, { cost: `<u>${new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.systemConfiguration.currencyCode })
                            .format(this.visit.longExtensionEntity.extensionCost)}</u>` }), button1Text: this.messages.amwell_visit_console_visit_extension_continue, button1OnClick: (e) => { e.preventDefault(); this.acceptVisitExtension(true); }, button2Text: this.messages.amwell_visit_console_visit_extension_cancel, button2OnClick: (e) => { e.preventDefault(); this.acceptVisitExtension(false); } })));
    }
    static get is() { return "amwell-visit-console"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["variables.css", "visit-console.css", "../shared.css"]
    }; }
    static get styleUrls() { return {
        "$": ["variables.css", "visit-console.css", "../shared.css"]
    }; }
    static get states() { return {
        "sdk": {},
        "visit": {},
        "activeDrawerName": {},
        "isDrawerOpen": {},
        "showChatNotification": {},
        "showNotesNotification": {},
        "isHeaderDisabled": {},
        "isSidebarDisabled": {},
        "systemConfiguration": {},
        "showVisitExtensionModal": {},
        "messages": {},
        "locale": {},
        "extensionOfferAcceptedOrRejected": {},
        "timeRemaining": {},
        "isBottomDrawerOpen": {},
        "active": {}
    }; }
    static get methods() { return {
        "initialize": {
            "complexType": {
                "signature": "(sdk: awsdk.AWSDK, options: { visit: awsdk.AWSDKVisit; disableHeader?: boolean; disableSidebar?: boolean; messages?: { [key: string]: string; }; locale?: string; }) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "awsdk": {
                        "location": "import",
                        "path": "../../awsdk"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "The initialize function for this widget.\n\nRequires an initialized SDK instance and an options object with an PreVisitScreening or InProgress Visit.\n\n+ `visit`: a PreVisitScreening or InProgress AWSDKVisit instance to use in the WebRTC video experience.\n+ `disableHeader`: set to `true` if the header portion of the visit console should be disabled.\n+ `disableSidebar`: set to `true` if the sidebar portion of the visit console should be disabled.\n+ `messages`: an object of localized string messages.\n+ `locale`: the locale of the visit console i.e. `en-US`.",
                "tags": []
            }
        },
        "destroy": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get listeners() { return [{
            "name": "visitEnd",
            "method": "onVisitEndListener",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "visitUpdated",
            "method": "onVisitUpdatedListener",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "visitError",
            "method": "onVisitErrorListener",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "newMessagesReceived",
            "method": "newMessagesReceivedListener",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "newNotesReceived",
            "method": "newNotesReceivedListener",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
