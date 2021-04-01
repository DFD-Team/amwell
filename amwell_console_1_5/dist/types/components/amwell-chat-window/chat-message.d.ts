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
import { FunctionalComponent } from '../../stencil-public-runtime';
import { awsdk } from '../../awsdk';
interface ChatMessageProps {
    chatItem: awsdk.AWSDKChatItem;
    showSubtitle: boolean;
}
declare const ChatMessage: FunctionalComponent<ChatMessageProps>;
export default ChatMessage;
