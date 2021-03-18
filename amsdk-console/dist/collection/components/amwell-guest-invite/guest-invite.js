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
import SimpleBar from 'simplebar';
import defaultMessages from './messages.default';
export class GuestInvite {
    constructor() {
        this.emails = [{ value: '' }];
        this.invitedGuests = [];
        this.messages = defaultMessages;
    }
    componentDidLoad() {
        // attach custom scrollbar to the invite window or fallback to default if no shadowDom support
        if (document.head.attachShadow) {
            new SimpleBar(this.inviteScroll, { autoHide: false, direction: document.documentElement.dir });
        }
    }
    async initialize(sdk, options) {
        this.sdk = sdk;
        this.systemConfiguration = sdk.getSystemConfiguration();
        this.visit = options.visit;
        Object.assign(this.messages, options.messages);
    }
    async destroy() {
        this.sdk = null;
        this.visit = null;
        this.systemConfiguration = null;
        this.emails = [{ value: '' }];
        this.invitedGuests = [];
        this.pendingInvites = false;
        this.invitesSent = false;
        this.focusedIndex = null;
    }
    visitUpdated(newVisit) {
        if (!newVisit)
            return;
        this.invitedGuests = newVisit.invitedGuestEmails || [];
    }
    removeInput(e, index) {
        e.preventDefault();
        this.emails.splice(index, 1);
        this.emails = [...this.emails];
    }
    addInput(e) {
        e.preventDefault();
        this.emails = [...this.emails, { value: '' }];
        this.invitesSent = false;
    }
    checkEmailValidOrEmpty(emailString, allowEmpty) {
        const regex = /^[a-zA-Z0-9!#$%&amp;'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&amp;'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
        // has to be a string, can be empty if flag is true and if not must match regex
        return (typeof emailString === 'string') && ((allowEmpty && !emailString) || !!emailString.match(regex));
    }
    checkEmailExists(emailString) {
        const alreadyInvited = !!this.invitedGuests.find((guest) => emailString.toUpperCase() == guest.toUpperCase());
        const alreadyEntered = (this.emails.filter((email) => emailString.toUpperCase() == email.value.toUpperCase()).length > 1);
        return alreadyInvited || alreadyEntered;
    }
    validateEmail(email, allowEmpty = true) {
        if (!this.checkEmailValidOrEmpty(email.value, allowEmpty)) {
            email.error = this.messages.amwell_guest_invite_error_invalid_email;
        }
        else if (this.checkEmailExists(email.value)) {
            email.error = this.messages.amwell_guest_invite_error_invited_email;
        }
        else {
            email.error = null;
        }
    }
    handleOnEmailBlur(email, value) {
        // not focusing anything so set it to an IMPOSSIBLE INDEX
        this.focusedIndex = -1;
        // set value of email to user input
        email.value = value;
        // make sure what they entered isn't bananas
        this.validateEmail(email, true);
        // update the state of the component (causes a re-render)
        this.emails = [...this.emails];
    }
    shouldShowAddMoreButton() {
        // only show if we have less total invitedGuests + current inputs than the server configured max
        return (!!this.systemConfiguration && this.systemConfiguration.maxVideoInvites > (this.emails.length + this.invitedGuests.length));
    }
    shouldShowInviteSection() {
        // only show if we have less invitedGuests than server configured max
        return (!!this.systemConfiguration && this.systemConfiguration.maxVideoInvites > this.invitedGuests.length);
    }
    shouldSendInvites() {
        // validate all the emails
        this.emails.forEach((e) => this.validateEmail(e, false));
        // check if we got any errors
        const emailsHaveNoErrors = this.emails.every((e) => !e.error);
        // only send if we have emails that are valid to send and there are no pending invites
        return this.emails.length > 0 && emailsHaveNoErrors && !this.pendingInvites;
    }
    inviteGuests() {
        // if there are no emails, or emails with errors, or if there's already pending invites
        if (!this.shouldSendInvites()) {
            // make sure we're rendering latest email state
            this.emails = [...this.emails];
            return Promise.reject();
        }
        // make sure we keep track of if we've already sent invites
        this.pendingInvites = true;
        // invite guest
        return this.sdk.visitService.inviteGuestsToVisit(this.visit, this.emails.map((e) => e.value))
            .then((invites) => {
            // clear out the inputs
            this.emails = [];
            this.invitesSent = true;
            // set invited guests to the list we get back, will be overwritten by what comes back on visit
            this.invitedGuests = invites.filter((invite) => invite.inviter === "CONSUMER").map((invite) => invite.email);
        })
            .catch(() => {
            // make sure to revert this to false if we never actually sent the invites.
        })
            .finally(() => this.pendingInvites = false);
    }
    async handleSendInvites(e) {
        e.preventDefault();
        try {
            await this.inviteGuests();
        }
        catch (_a) {
            // eat this error
        }
    }
    render() {
        return (h("div", { class: "guest-invite", ref: (el) => this.inviteScroll = el, dir: document.documentElement.dir, "data-simplebar-direction": document.documentElement.dir },
            h("div", null,
                this.invitedGuests.length > 0 &&
                    h("div", { class: "invited-guest-section" },
                        h("h3", null, this.messages.amwell_guest_invite_invited_guests_header),
                        h("div", { class: "invited-guest-names" }, this.invitedGuests.sort((guest1, guest2) => guest1.length - guest2.length).map((guest) => [h("div", { title: guest, class: "invited-guest-name" }, guest), h("div", { class: "invited-guest-spacer" })])),
                        h("div", { class: { "max-invited-message": true, "max-invited": !this.shouldShowInviteSection() } }, this.messages.amwell_guest_invite_invited_max)),
                this.shouldShowInviteSection() &&
                    h("div", { class: "invite-guest-section" },
                        h("div", { class: "invite-guest-subtitle" }, this.messages.amwell_guest_invite_invite_guest_subtitle),
                        h("div", { class: "invite-inputs" }, this.emails.map((email, index) => h("div", { key: email.value + index, class: "input-group" },
                            h("floating-label-input", { error: email.error, label: this.messages.amwell_guest_invite_input_label, value: email.value, hasFocus: this.focusedIndex === index, handleOnFocus: () => this.focusedIndex = index, handleOnBlur: (e) => this.handleOnEmailBlur(email, e.target.value) }),
                            this.emails.length > 1 &&
                                h("button", { class: "link-like", onClick: (e) => this.removeInput(e, index) }, this.messages.amwell_guest_invite_remove_text)))),
                        this.shouldShowAddMoreButton() &&
                            h("button", { class: "add-another-button link-like", onClick: (e) => this.addInput(e) },
                                h("span", { class: "add-another-plus-sign" }, "\u271A"),
                                h("span", { class: "add-another-text" }, this.messages.amwell_guest_invite_add_another_text)),
                        h("button", { onClick: (e) => this.handleSendInvites(e), class: { "send-invite-button": true,
                                "pending-invites": this.pendingInvites,
                                "invites-sent": this.invitesSent
                            } },
                            h("div", null),
                            this.invitesSent
                                ?
                                    h("span", null, this.messages.amwell_guest_invite_button_text_pending)
                                :
                                    h("span", null, this.messages.amwell_guest_invite_button_text))))));
    }
    static get is() { return "amwell-guest-invite"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["guest-invite.css", "../shared.css", "../../../node_modules/simplebar/dist/simplebar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["guest-invite.css", "../shared.css", "../../../node_modules/simplebar/dist/simplebar.css"]
    }; }
    static get properties() { return {
        "visit": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "awsdk.AWSDKVisit",
                "resolved": "AWSDKVisit",
                "references": {
                    "awsdk": {
                        "location": "import",
                        "path": "../../awsdk"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get states() { return {
        "sdk": {},
        "emails": {},
        "invitedGuests": {},
        "pendingInvites": {},
        "invitesSent": {},
        "focusedIndex": {},
        "messages": {},
        "systemConfiguration": {}
    }; }
    static get methods() { return {
        "initialize": {
            "complexType": {
                "signature": "(sdk: awsdk.AWSDK, options: { visit: awsdk.AWSDKVisit; messages?: { [key: string]: string; }; }) => Promise<void>",
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
                "text": "",
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
    static get watchers() { return [{
            "propName": "visit",
            "methodName": "visitUpdated"
        }]; }
}
