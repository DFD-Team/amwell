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
import LargeChatIcon from './svgs/large-chat-icon';
import SendIcon from './svgs/send-icon';
import AdminMessage from './admin-message';
import ChatMessage from './chat-message';
import defaultMessages from './messages.default';
export class ChatWindow {
    constructor() {
        this.chatItems = [];
        this.lastOrdinal = 0;
        this.messages = defaultMessages; // i18n messages
        this.locale = 'en-US';
        /* NON-UI driving state */
        this.shouldScrollToBottom = true;
    }
    async initialize(sdk, options) {
        this.sdk = sdk;
        this.visit = options.visit;
        this.shouldScrollToBottom = true;
        // copy over whatever they give us
        Object.assign(this.messages, options.messages);
        this.locale = options.locale || this.locale;
        if (options.visit.chatReport) {
            this.chatItems = options.visit.chatReport.chatItems || [];
            this.lastOrdinal = options.visit.chatReport.lastOrdinal;
        }
    }
    async destroy() {
        this.sdk = null;
        this.visit = null;
        this.chatItems = [];
        this.lastOrdinal = 0;
    }
    visitUpdated(newVisit) {
        if (!newVisit)
            return;
        const chatItems = (newVisit.chatReport && newVisit.chatReport.chatItems) || [];
        const newChatItemsExist = newVisit.chatReport && newVisit.chatReport.lastOrdinal > this.lastOrdinal;
        // if we have new messages
        if (newChatItemsExist) {
            // if we're not scrolled to bottom, show the toast,
            // otherwise we need to scroll to the bottom again on next update so set shouldScrollToBottom to true
            if (!this.isTranscriptScrolledToBottom()) {
                this.showNewMessagesToast = true;
            }
            else {
                this.shouldScrollToBottom = true;
            }
            this.newMessagesReceived.emit();
        }
        if (newVisit.chatReport && this.lastOrdinal < newVisit.chatReport.lastOrdinal) {
            this.chatItems = chatItems;
            this.lastOrdinal = newVisit.chatReport.lastOrdinal;
        }
    }
    isTranscriptScrolledToBottom() {
        return this.transcriptScroll.clientHeight === 0 || Math.abs(this.transcriptScroll.scrollHeight - this.transcriptScroll.scrollTop - this.transcriptScroll.clientHeight) <= 3;
    }
    scrollToBottom() {
        this.transcriptScroll.scrollTop = this.transcriptScroll.scrollHeight;
        this.showNewMessagesToast = false;
        this.shouldScrollToBottom = false;
    }
    componentDidLoad() {
        // attach custom scrollbar to the transcript or fallback to default if no shadowDom support
        if (document.head.attachShadow) {
            const simpleBar = new SimpleBar(this.transcript, { autoHide: false, direction: document.documentElement.dir });
            this.transcriptScroll = simpleBar.getScrollElement();
        }
        else {
            this.transcriptScroll = this.transcript;
        }
    }
    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            this.scrollToBottom();
        }
        else if (this.isTranscriptScrolledToBottom()) {
            this.showNewMessagesToast = false;
        }
    }
    sendMessage(e) {
        e.preventDefault();
        // if message is empty text don't send it
        if (!this.input.value) {
            return;
        }
        return this.sdk.visitService.addChatMessage(this.visit, this.input.value, this.lastOrdinal)
            .then((report) => {
            this.chatItems = [...this.chatItems, ...report.chatItems];
            this.input.value = '';
            this.shouldScrollToBottom = true;
            this.lastOrdinal = report.lastOrdinal;
        });
    }
    drawChatItems(chatItems) {
        return chatItems.map((item, index) => {
            // check if next message is from the same usertype as current message
            const wasSameSender = chatItems[index + 1] && item.userType === chatItems[index + 1].userType;
            // check if current message was sent within 1 minute of previous message
            const wasSentWithinAMinute = chatItems[index + 1] && item.date.getMinutes() === chatItems[index + 1].date.getMinutes();
            return this.drawChatItem(item, !wasSameSender || !wasSentWithinAMinute);
        });
    }
    drawChatItem(chatItem, showSubtitle) {
        if (chatItem.userType === "ADMIN") {
            return h(AdminMessage, { chatItem: chatItem, i18messages: this.messages });
        }
        return h(ChatMessage, { chatItem: chatItem, showSubtitle: showSubtitle });
    }
    render() {
        return (h("div", { class: "chat-window", dir: document.documentElement.dir },
            h("div", { ref: (el) => this.transcript = el, class: { 'transcript': true, 'hidden': this.chatItems.length === 0 }, "data-simplebar-direction": document.documentElement.dir },
                h("div", null,
                    h("div", { class: "chat-icon-bumper" },
                        h(LargeChatIcon, null)),
                    this.drawChatItems(this.chatItems))),
            h("div", { class: { 'chat-placeholder': true, 'hidden': this.chatItems.length > 0 } },
                h(LargeChatIcon, null),
                h("div", null, this.messages.amwell_chat_window_messages_placeholder)),
            h("div", { class: { 'new-message-toast-container': true, 'hidden': !this.showNewMessagesToast } },
                h("div", { onClick: () => this.scrollToBottom(), class: "new-message-toast" },
                    h("div", { class: "chevron down" }),
                    h("div", null, this.messages.amwell_chat_window_new_messages_toast),
                    h("div", { class: "chevron down" }))),
            h("form", null,
                h("input", { ref: (el) => this.input = el, type: "text", placeholder: this.messages.amwell_chat_window_input_placeholder }),
                h("button", { type: "submit", onClick: (e) => this.sendMessage(e) },
                    h(SendIcon, null)))));
    }
    static get is() { return "amwell-chat-window"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["chat-window.css", "../shared.css", "../../../node_modules/simplebar/dist/simplebar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["chat-window.css", "../shared.css", "../../../node_modules/simplebar/dist/simplebar.css"]
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
        "chatItems": {},
        "showNewMessagesToast": {},
        "lastOrdinal": {},
        "messages": {},
        "locale": {}
    }; }
    static get events() { return [{
            "method": "newMessagesReceived",
            "name": "newMessagesReceived",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "initialize": {
            "complexType": {
                "signature": "(sdk: awsdk.AWSDK, options: { visit: awsdk.AWSDKVisit; messages?: { [key: string]: string; }; locale?: string; }) => Promise<void>",
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
