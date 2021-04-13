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
import { awsdk } from '../../awsdk';
export declare class GuestInvite {
    visit: awsdk.AWSDKVisit;
    sdk: awsdk.AWSDK;
    emails: {
        value: string;
        error?: string;
    }[];
    invitedGuests: string[];
    pendingInvites: boolean;
    invitesSent: boolean;
    focusedIndex: number;
    messages: {
        amwell_guest_invite_error_invalid_email: string;
        amwell_guest_invite_error_invited_email: string;
        amwell_guest_invite_invited_guests_header: string;
        amwell_guest_invite_invited_max: string;
        amwell_guest_invite_invite_guest_subtitle: string;
        amwell_guest_invite_remove_text: string;
        amwell_guest_invite_input_label: string;
        amwell_guest_invite_add_another_text: string;
        amwell_guest_invite_button_text_pending: string;
        amwell_guest_invite_button_text: string;
    };
    systemConfiguration: awsdk.AWSDKSystemConfiguration;
    inviteScroll: HTMLElement;
    componentDidLoad(): void;
    initialize(sdk: awsdk.AWSDK, options: {
        visit: awsdk.AWSDKVisit;
        messages?: {
            [key: string]: string;
        };
    }): Promise<void>;
    destroy(): Promise<void>;
    visitUpdated(newVisit: awsdk.AWSDKVisit): void;
    removeInput(e: Event, index: any): void;
    addInput(e: Event): void;
    checkEmailValidOrEmpty(emailString: any, allowEmpty: any): boolean;
    checkEmailExists(emailString: any): boolean;
    validateEmail(email: any, allowEmpty?: boolean): void;
    handleOnEmailBlur(email: any, value: any): void;
    shouldShowAddMoreButton(): boolean;
    shouldShowInviteSection(): boolean;
    shouldSendInvites(): boolean;
    inviteGuests(): Promise<void>;
    handleSendInvites(e: Event): Promise<void>;
    render(): any;
}
