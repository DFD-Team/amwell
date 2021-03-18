import { awsdk } from '../../awsdk';
/**
 * The American Well visit console widget.
 */
export declare class VisitConsole {
    sdk: awsdk.AWSDK;
    visit: awsdk.AWSDKVisit;
    activeDrawerName: String;
    isDrawerOpen: boolean;
    showChatNotification: boolean;
    showNotesNotification: boolean;
    isHeaderDisabled: boolean;
    isSidebarDisabled: boolean;
    systemConfiguration: awsdk.AWSDKSystemConfiguration;
    showVisitExtensionModal: boolean;
    messages: {
        amwell_visit_console_chat_button_text: string;
        amwell_visit_console_notes_button_text: string;
        amwell_visit_console_invite_button_text: string;
        amwell_visit_console_reload_button_text: string;
        amwell_visit_console_drawer_chat_title: string;
        amwell_visit_console_drawer_notes_title: string;
        amwell_visit_console_drawer_invite_title: string;
        amwell_visit_console_visit_extension_continue: string;
        amwell_visit_console_visit_extension_cancel: string;
        amwell_visit_console_visit_extension_title: string;
        amwell_visit_console_visit_extension_message: string;
        amwell_visit_console_drawer_tyto_button_text: string;
        amwell_visit_console_drawer_tyto_header_text: string;
    };
    locale: string;
    extensionOfferAcceptedOrRejected: boolean;
    timeRemaining: string;
    isBottomDrawerOpen: boolean;
    active: boolean;
    chatWindow: HTMLAmwellChatWindowElement;
    visitNotes: HTMLAmwellVisitNotesElement;
    guestInvite: HTMLAmwellGuestInviteElement;
    videoConsole: HTMLAmwellVideoConsoleElement;
    tytoDevice: HTMLAmwellTytoDeviceElement;
    onVisitEndListener(): Promise<void>;
    onVisitUpdatedListener(event: CustomEvent): void;
    onVisitErrorListener(): void;
    newMessagesReceivedListener(): void;
    newNotesReceivedListener(): void;
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
    initialize(sdk: awsdk.AWSDK, options: {
        visit: awsdk.AWSDKVisit;
        disableHeader?: boolean;
        disableSidebar?: boolean;
        messages?: {
            [key: string]: string;
        };
        locale?: string;
    }): Promise<void>;
    validateInitialize(sdk: any, options: any): Promise<never>;
    destroy(): Promise<void>;
    msToTime(ms?: number): string;
    toggleDrawer(drawerName: string): void;
    acceptVisitExtension(accepted: any): void;
    render(): any;
}
