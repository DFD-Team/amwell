/*!
 * American Well Visit Console Widget
 *
 * Copyright © 2020 American Well.
 * All rights reserved.
 *
 * It is illegal to use, reproduce or distribute
 * any part of this Intellectual Property without
 * prior written authorization from American Well.
 */
import { EventEmitter } from "../../../stencil-public-runtime";
export declare class TytoPairingFailed {
    messages: {
        amwell_tyto_device_qrCodePageDesc: string;
        amwell_tyto_device_deviceDescription: string;
        amwell_tyto_device_useTytoInVisitQuestion: string;
        amwell_tyto_device_deviceSetupHeader: string;
        amwell_tyto_device_pairing_setup_provider: string;
        amwell_tyto_device_pairing_setup_disclaimer: string;
        amwell_tyto_device_network: string;
        amwell_tyto_device_password: string;
        amwell_tyto_device_deviceId: string;
        amwell_tyto_device_devicePaired: string;
        amwell_tyto_device_pairDifferentNetwork: string;
        amwell_tyto_device_misc_ok: string;
        amwell_tyto_device_misc_cancel: string;
        amwell_tyto_device_misc_back: string;
        amwell_tyto_device_misc_continue: string;
        amwell_tyto_device_misc_show: string;
        amwell_tyto_device_misc_hide: string;
        amwell_tyto_device_misc_yes: string;
        amwell_tyto_device_misc_no: string;
        amwell_tyto_device_able_to_pair: string;
        amwell_tyto_device_not_connected: string;
        amwell_tyto_device_trying_to_connect: string;
        amwell_tyto_device_trying_to_pairing: string;
        amwell_tyto_device_trouble_to_connect: string;
        amwell_tyto_device_reload: string;
        amwell_tyto_device_pair_anytime: string;
        amwell_tyto_device_qr_expired: string;
        amwell_tyto_device_regenerate: string;
        amwell_tyto_device_generate_new_qrcode: string;
        amwell_tyto_device_pairing_failure: string;
        amwell_tyto_device_support_link: string;
        amwell_tyto_device_please_try_again: string;
        amwell_tyto_device_try_again: string;
        amwell_tyto_device_first_error_callback: string;
        amwell_tyto_device_connection_unavailable: string;
        amwell_tyto_device_second_error_callback: string;
    };
    displayStep: EventEmitter;
    onTryAgain(): void;
    render(): any;
}
