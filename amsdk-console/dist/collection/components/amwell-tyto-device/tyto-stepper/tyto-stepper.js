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
import { TytoWizardScreenType } from "../tyto-wizard-screen-type.model";
import defaultMessages from "../messages.default";
export class TytoStepper {
    constructor() {
        this.messages = defaultMessages;
        this.currentStep = 0;
        this.steps = 8;
        this.displayChangeNetwork = true;
        this.showServicesUnavaiablePage = false;
    }
    displayStepHandler(event) {
        this.initializeStep = event.detail;
        if (event.detail == TytoWizardScreenType.TYTO_DEVICE_INTAKE && this.isTytoDevicePaired) {
            this.initializeStep = TytoWizardScreenType.DEVICE_PAIRED;
        }
    }
    devicePairedListener() {
        this.displayChangeNetwork = false;
        this.initializeStep = TytoWizardScreenType.DEVICE_PAIRED;
    }
    handleNetworkDetailsListener(event) {
        this.userNetworkDetails = {
            ssId: event.detail.ssId,
            ssIdPwd: event.detail.ssIdPwd,
        };
    }
    startNewQRCodeProcessListener() {
        this.tytoQRcodeComponents.handleCreateNewQRCode(this.userNetworkDetails.ssId, this.userNetworkDetails.ssIdPwd);
    }
    showErrorPageListener() {
        if (!this.showServicesUnavaiablePage) {
            this.showServicesUnavaiablePage = !this.showServicesUnavaiablePage;
            this.initializeStep = TytoWizardScreenType.TRY_AGAIN;
        }
        else {
            this.initializeStep = TytoWizardScreenType.SERVICE_UNAVAILABLE;
        }
    }
    render() {
        this.currentStep = this.initializeStep;
        const steps = () => {
            switch (this.currentStep) {
                case TytoWizardScreenType.TYTO_DEVICE_INTAKE:
                    return h("tyto-device", null);
                case TytoWizardScreenType.SETUP_DEVICE:
                    return h("tyto-setup-wifi", null);
                case TytoWizardScreenType.QRCODE_SCREEN:
                    return (h("tyto-qr-code", { ref: (el) => (this.tytoQRcodeComponents = el), sdk: this.sdk, consumer: this.consumer }));
                case TytoWizardScreenType.DEVICE_PAIRED:
                    return (h("tyto-paired-device", { displayChangeNetwork: this.displayChangeNetwork }));
                case TytoWizardScreenType.REGENERATE_QRCODE: {
                    return h("tyto-regenerate-qr", null);
                }
                case TytoWizardScreenType.PAIRING_ERROR:
                    return h("tyto-pairing-failed", null);
                case TytoWizardScreenType.TRY_AGAIN:
                    return (h("tyto-error-callback", { headerMsg: this.messages.amwell_tyto_device_please_try_again, bodyMsg: this.messages.amwell_tyto_device_first_error_callback, buttonMsg: this.messages.amwell_tyto_device_try_again }));
                case TytoWizardScreenType.SERVICE_UNAVAILABLE:
                    return (h("tyto-error-callback", { headerMsg: this.messages.amwell_tyto_device_connection_unavailable, bodyMsg: this.messages.amwell_tyto_device_second_error_callback, buttonMsg: "" }));
                default:
                    return h("loading-spinner", null);
            }
        };
        return (h("div", { class: "tyto-stepper" },
            h("div", null, steps())));
    }
    static get is() { return "tyto-stepper"; }
    static get properties() { return {
        "sdk": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "awsdk.AWSDK",
                "resolved": "AWSDK",
                "references": {
                    "awsdk": {
                        "location": "import",
                        "path": "../../../awsdk"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "consumer": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "awsdk.AWSDKConsumer",
                "resolved": "AWSDKConsumer",
                "references": {
                    "awsdk": {
                        "location": "import",
                        "path": "../../../awsdk"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "initializeStep": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "initialize-step",
            "reflect": false
        },
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
        "isTytoDevicePaired": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "is-tyto-device-paired",
            "reflect": false
        }
    }; }
    static get states() { return {
        "currentStep": {},
        "steps": {},
        "tytoQRcodeComponents": {},
        "displayChangeNetwork": {}
    }; }
    static get listeners() { return [{
            "name": "displayStep",
            "method": "displayStepHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "pairedDeviceSuccess",
            "method": "devicePairedListener",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "handleNetworkDetails",
            "method": "handleNetworkDetailsListener",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "startNewQRCodeProcess",
            "method": "startNewQRCodeProcessListener",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "showErrorPage",
            "method": "showErrorPageListener",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
