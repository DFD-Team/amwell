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
export declare class VideoConsole {
    /** Called whenever the visit is updated.
     *  event.detail is an object with the latest visit. */
    visitUpdated: EventEmitter<{
        visit: awsdk.AWSDKVisit;
    }>;
    /** Called when the visit encounters an error.
     *  event.detail is an object with the latest visit and an error field. */
    visitError: EventEmitter<{
        visit: awsdk.AWSDKVisit;
        error: any;
    }>;
    /** Called when the visit ends.
     *  event.detail is an object with the ended visit.*/
    visitEnd: EventEmitter<{
        visit: awsdk.AWSDKVisit;
    }>;
    container: HTMLElement;
    sdk: awsdk.AWSDK;
    visit: awsdk.AWSDKVisit;
    messages: {
        amwell_video_console_accept_permission: string;
        amwell_video_console_call_me: string;
        amwell_video_console_camera: string;
        amwell_video_console_can_cancel_rejoin: string;
        amwell_video_console_can_cancel: string;
        amwell_video_console_connecting_guest: string;
        amwell_video_console_connecting_guest_subtext: string;
        amwell_video_console_connecting_remote_extended: string;
        amwell_video_console_connecting_remote_extended_subtext: string;
        amwell_video_console_connecting_remote_extended_subtext_ivr: string;
        amwell_video_console_connecting_with_remote: string;
        amwell_video_console_connecting_your_video_extended: string;
        amwell_video_console_connecting_your_video_subtext_extended: string;
        amwell_video_console_connecting_your_video_subtext_extended_ivr: string;
        amwell_video_console_consumer_reconnecting: string;
        amwell_video_console_consumer_subtitle_age: string;
        amwell_video_console_end_visit_confirmation_title: string;
        amwell_video_console_full_screen: string;
        amwell_video_console_header_browser_permission: string;
        amwell_video_console_media_permission_denied: string;
        amwell_video_console_mic: string;
        amwell_video_console_participant_connection_issue: string;
        amwell_video_console_participant_type_label_consumer: string;
        amwell_video_console_participant_type_label_guest: string;
        amwell_video_console_participant_type_label_provider: string;
        amwell_video_console_provider_reconnecting: string;
        amwell_video_console_reconnecting_remote: string;
        amwell_video_console_reconnecting_remote_as_guest_subtext: string;
        amwell_video_console_reconnecting_consumer_subtext: string;
        amwell_video_console_reconnecting_provider_subtext: string;
        amwell_video_console_reconnecting_your_video_main: string;
        amwell_video_console_reconnecting_your_video_extended: string;
        amwell_video_console_reconnecting_your_video_extended_subtext: string;
        amwell_video_console_reconnecting_your_video_extended_subtext_ivr: string;
        amwell_video_console_reconnecting_your_video_subtext: string;
        amwell_video_console_refresh: string;
        amwell_video_console_settings_camera_list_header: string;
        amwell_video_console_settings_microphone_list_header: string;
        amwell_video_console_settings_speaker_list_header: string;
        amwell_video_console_settings: string;
        amwell_video_console_settings_details: string;
        amwell_video_console_switch: string;
        amwell_video_console_talk_via_phone: string;
        amwell_video_console_webrtc_additional_comments: string;
        amwell_video_console_webrtc_end_visit_confirmation_singular: string;
        amwell_video_console_webrtc_end_visit_confirmation_plural: string;
        amwell_video_console_webrtc_back: string;
        amwell_video_console_webrtc_cancel_visit: string;
        amwell_video_console_webrtc_cancel_visit_confirmation: string;
        amwell_video_console_webrtc_cancel_visit_sub: string;
        amwell_video_console_webrtc_confirm_end: string;
        amwell_video_console_webrtc_disregard_end: string;
        amwell_video_console_webrtc_end_visit_confirmation: string;
        amwell_video_console_webrtc_end_visit: string;
        amwell_video_console_webrtc_guest_name_default: string;
        amwell_video_console_webrtc_refresh_visit: string;
        amwell_video_console_webrtc_visit_report_note: string;
        amwell_video_console_self_video: string;
    };
    videoConsole: any;
    initialize(sdk: awsdk.AWSDK, options: {
        visit: awsdk.AWSDKVisit;
        messages?: {
            [key: string]: string;
        };
        locale?: string;
    }): Promise<boolean>;
    destroy(): Promise<void>;
    refresh(): Promise<void>;
    render(): any;
}
