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
export class TytoSetupWifi {
    constructor() {
        this.messages = defaultMessages;
        this.showPasswordText = this.messages.amwell_tyto_device_misc_show;
        this.wifiPasswordInputType = 'password';
        this.focusedIndex = -1;
        this.hidePassword = true;
    }
    onNextPress(e) {
        e.preventDefault();
        const wifiDetails = {
            ssId: this.wifiNetworkInput,
            ssIdPwd: this.wifiPasswordInput,
        };
        this.handleNetworkDetails.emit(wifiDetails);
        this.displayStep.emit(TytoWizardScreenType.QRCODE_SCREEN);
    }
    onPrevious() {
        this.displayStep.emit(TytoWizardScreenType.TYTO_DEVICE_INTAKE);
    }
    handleHideShowPassword() {
        this.hidePassword = !this.hidePassword;
        this.showPasswordText = this.hidePassword
            ? this.messages.amwell_tyto_device_misc_show
            : this.messages.amwell_tyto_device_misc_hide;
        this.wifiPasswordInputType = this.hidePassword ? "password" : "text";
    }
    handleOnWifiNetworkInputBlur(value) {
        this.focusedIndex = -1;
        this.wifiNetworkInput = value;
    }
    handleOnWifiPasswordInputBlur(value) {
        this.focusedIndex = -1;
        this.wifiPasswordInput = value;
    }
    render() {
        return (h("div", null,
            h("p", { class: "pleaseProvideYoursText" }, this.messages.amwell_tyto_device_pairing_setup_provider),
            h("form", { class: "formContainer" },
                h("div", { class: "input-group" },
                    h("floating-label-input", { error: '', label: this.messages.amwell_tyto_device_network, value: this.wifiNetworkInput, hasFocus: this.focusedIndex === 1, handleOnFocus: () => this.focusedIndex = 1, handleOnBlur: (e) => this.handleOnWifiNetworkInputBlur(e.target.value) })),
                h("br", null),
                h("div", { class: "input-group" },
                    h("floating-label-input", { label: this.messages.amwell_tyto_device_password, value: this.wifiPasswordInput, type: this.wifiPasswordInputType, hasFocus: this.focusedIndex === 2, handleOnFocus: () => this.focusedIndex = 2, handleOnBlur: (e) => this.handleOnWifiPasswordInputBlur(e.target.value) }),
                    h("label", { class: "password-label", onClick: () => this.handleHideShowPassword() }, this.showPasswordText))),
            h("p", { class: "secretWifiInfo" }, this.messages.amwell_tyto_device_pairing_setup_disclaimer),
            h("div", { class: "buttons-container" },
                h("button", { type: "button", class: "whiteBtn", onClick: () => this.onPrevious() }, this.messages.amwell_tyto_device_misc_back),
                h("button", { type: "button", class: "blueBtn", onClick: (e) => this.onNextPress(e) }, this.messages.amwell_tyto_device_misc_continue))));
    }
    static get is() { return "tyto-setup-wifi"; }
    static get originalStyleUrls() { return {
        "$": ["tyto-setup-wifi.css", "../../shared.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tyto-setup-wifi.css", "../../shared.css"]
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
        },
        "showPasswordText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-password-text",
            "reflect": false,
            "defaultValue": "this.messages.amwell_tyto_device_misc_show"
        },
        "wifiNetworkInput": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "wifi-network-input",
            "reflect": false
        },
        "wifiPasswordInput": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "wifi-password-input",
            "reflect": false
        },
        "wifiPasswordInputType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "wifi-password-input-type",
            "reflect": false,
            "defaultValue": "'password'"
        },
        "focusedIndex": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "focused-index",
            "reflect": false,
            "defaultValue": "-1"
        }
    }; }
    static get events() { return [{
            "method": "handleNetworkDetails",
            "name": "handleNetworkDetails",
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
        }, {
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
        }, {
            "method": "parentFunction",
            "name": "parentFunction",
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
