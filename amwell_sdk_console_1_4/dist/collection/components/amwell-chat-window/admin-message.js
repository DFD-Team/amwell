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
const AdminMessage = ({ chatItem, i18messages }) => {
    let title;
    let showBorder = true;
    switch (chatItem.messageType) {
        case 'Transfer':
            title = i18messages.amwell_chat_window_please_stay_online;
            break;
        case 'ProviderEnter':
            title = i18messages.amwell_chat_window_visit_begun;
            showBorder = false;
            break;
    }
    return (h("div", { class: { 'chat-item': true, 'admin-message': true, 'admin-message-border': showBorder } },
        title && h("h3", null, title),
        chatItem.message));
};
export default AdminMessage;
