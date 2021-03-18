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
import { h } from "@stencil/core";
import defaultMessages from "../messages.default";
import { TytoWizardScreenType } from "../tyto-wizard-screen-type.model";
import TytoToolsIcon from "../svgs/tyto-tools-icon";
export class TytoRegenerateQR {
    constructor() {
        this.messages = defaultMessages;
    }
    onNextPress() {
        this.displayStep.emit(TytoWizardScreenType.QRCODE_SCREEN);
    }
    render() {
        return (h("div", { class: "regenerate-qr-wrapper" },
            h(TytoToolsIcon, null),
            h("div", { class: "tyto-msg-wrapper" },
                h("p", { class: "bolder" }, this.messages.amwell_tyto_device_qr_expired),
                h("p", null, this.messages.amwell_tyto_device_regenerate)),
            h("div", { class: "buttons-container" },
                h("button", { type: "button", class: "blueBtn", onClick: () => this.onNextPress() }, this.messages.amwell_tyto_device_generate_new_qrcode))));
    }
    static get is() { return "tyto-regenerate-qr"; }
    static get originalStyleUrls() { return {
        "$": ["tyto-regenerate-qr.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tyto-regenerate-qr.css"]
    }; }
    static get properties() { return {
        "messages": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "{ amwell_tyto_device_qrCodePageDesc: string; amwell_tyto_device_deviceDescription: string; amwell_tyto_device_useTytoInVisitQuestion: string; amwell_tyto_device_deviceSetupHeader: string; amwell_tyto_device_pairing_setup_provider: string; amwell_tyto_device_pairing_setup_disclaimer: string; amwell_tyto_device_network: string; amwell_tyto_device_password: string; amwell_tyto_device_deviceId: string; amwell_tyto_device_devicePaired: string; amwell_tyto_device_pairDifferentNetwork: string; amwell_tyto_device_misc_ok: string; amwell_tyto_device_misc_cancel: string; amwell_tyto_device_misc_back: string; amwell_tyto_device_misc_continue: string; amwell_tyto_device_misc_show: string; amwell_tyto_device_misc_hide: string; amwell_tyto_device_misc_yes: string; amwell_tyto_device_misc_no: string; amwell_tyto_device_able_to_pair: string; amwell_tyto_device_not_connected: string; amwell_tyto_device_trying_to_connect: string; amwell_tyto_device_trying_to_pairing: string; amwell_tyto_device_trouble_to_connect: string; amwell_tyto_device_reload: string; amwell_tyto_device_pair_anytime: string; amwell_tyto_device_qr_expired: string; amwell_tyto_device_regenerate: string; amwell_tyto_device_generate_new_qrcode: string; amwell_tyto_device_pairing_failure: string; amwell_tyto_device_support_link: string; amwell_tyto_device_please_try_again: string; amwell_tyto_device_try_again: string; amwell_tyto_device_first_error_callback: string; amwell_tyto_device_connection_unavailable: string; amwell_tyto_device_second_error_callback: string; }",
                "resolved": "{ amwell_tyto_device_qrCodePageDesc: string; amwell_tyto_device_deviceDescription: string; amwell_tyto_device_useTytoInVisitQuestion: string; amwell_tyto_device_deviceSetupHeader: string; amwell_tyto_device_pairing_setup_provider: string; amwell_tyto_device_pairing_setup_disclaimer: string; amwell_tyto_device_network: string; amwell_tyto_device_password: string; amwell_tyto_device_deviceId: string; amwell_tyto_device_devicePaired: string; amwell_tyto_device_pairDifferentNetwork: string; amwell_tyto_device_misc_ok: string; amwell_tyto_device_misc_cancel: string; amwell_tyto_device_misc_back: string; amwell_tyto_device_misc_continue: string; amwell_tyto_device_misc_show: string; amwell_tyto_device_misc_hide: string; amwell_tyto_device_misc_yes: string; amwell_tyto_device_misc_no: string; amwell_tyto_device_able_to_pair: string; amwell_tyto_device_not_connected: string; amwell_tyto_device_trying_to_connect: string; amwell_tyto_device_trying_to_pairing: string; amwell_tyto_device_trouble_to_connect: string; amwell_tyto_device_reload: string; amwell_tyto_device_pair_anytime: string; amwell_tyto_device_qr_expired: string; amwell_tyto_device_regenerate: string; amwell_tyto_device_generate_new_qrcode: string; amwell_tyto_device_pairing_failure: string; amwell_tyto_device_support_link: string; amwell_tyto_device_please_try_again: string; amwell_tyto_device_try_again: string; amwell_tyto_device_first_error_callback: string; amwell_tyto_device_connection_unavailable: string; amwell_tyto_device_second_error_callback: string; }",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "defaultMessages"
        }
    }; }
    static get events() { return [{
            "method": "displayStep",
            "name": "displayStep",
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
}
