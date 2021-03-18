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
import { EventEmitter } from '../../stencil-public-runtime';
import { awsdk } from '../../awsdk';
export declare class ChatWindow {
    visit: awsdk.AWSDKVisit;
    newMessagesReceived: EventEmitter;
    sdk: awsdk.AWSDK;
    chatItems: awsdk.AWSDKChatItem[];
    showNewMessagesToast: boolean;
    lastOrdinal: number;
    messages: {
        amwell_chat_window_messages_placeholder: string;
        amwell_chat_window_new_messages_toast: string;
        amwell_chat_window_input_placeholder: string;
    };
    locale: string;
    shouldScrollToBottom: boolean;
    input: HTMLInputElement;
    transcript: HTMLElement;
    transcriptScroll: HTMLElement;
    initialize(sdk: awsdk.AWSDK, options: {
        visit: awsdk.AWSDKVisit;
        messages?: {
            [key: string]: string;
        };
        locale?: string;
    }): Promise<void>;
    destroy(): Promise<void>;
    visitUpdated(newVisit: awsdk.AWSDKVisit): void;
    isTranscriptScrolledToBottom(): boolean;
    scrollToBottom(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    sendMessage(e: Event): Promise<void>;
    drawChatItems(chatItems: awsdk.AWSDKChatItem[]): any[];
    drawChatItem(chatItem: awsdk.AWSDKChatItem, showSubtitle: boolean): any;
    render(): any;
}
