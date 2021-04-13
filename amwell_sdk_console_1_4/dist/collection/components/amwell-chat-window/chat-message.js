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
import { format } from 'date-fns';
const ChatMessage = ({ chatItem, showSubtitle }) => (h("div", { class: { 'chat-item': true, 'self-message': chatItem.isSelf } },
    h("div", { class: "chat-item-content" },
        h("div", { class: "chat-item-bubble" },
            h("div", { class: "chat-item-message" }, chatItem.message),
            h("div", { class: "chat-item-tail-outer" },
                h("div", { class: "chat-item-tail-inner" }))),
        showSubtitle &&
            h("div", { class: "chat-item-subtitle" },
                !chatItem.isSelf && h("span", null, chatItem.fullName),
                !chatItem.isSelf && h("span", null, "\u00A0-\u00A0"),
                h("span", null, format(chatItem.date, 'h:mm A'))))));
export default ChatMessage;
