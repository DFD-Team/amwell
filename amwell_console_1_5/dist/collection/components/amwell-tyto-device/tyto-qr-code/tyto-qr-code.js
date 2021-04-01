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
export class TytoQRCode {
    constructor() {
        this.messages = defaultMessages;
        this.hasQRCode = false;
        this.isPaired = false;
        this.pairedDeviceTimeOut = 10000;
        this.pollingInterval = 2000;
        this.MINUTE = 60 * 1000;
        this.qrTimeToLive = 5 * this.MINUTE;
    }
    componentWillLoad() {
        this.startNewQRCodeProcess.emit();
    }
    async handleCreateNewQRCode(ssid, ssidPwd) {
        this.fetchQRCode(ssid, ssidPwd)
            .then((response) => {
            if (response)
                this.hasQRCode = true;
            this.qrTimeToLiveTimeout = setTimeout(() => {
                if (!this.isPaired) {
                    this.displayStep.emit(TytoWizardScreenType.REGENERATE_QRCODE);
                }
                clearTimeout(this.qrTimeToLiveTimeout);
            }, this.qrTimeToLive);
        })
            .catch(() => {
            this.displayErrorScreenBasedOnErrorCounter();
        });
    }
    beginPollingPairingStatus() {
        this.qrCodeElement.innerHTML = "";
        this.hasQRCode = false;
        this.pollDevicePairingStatus(this.pollingInterval, this.pairedDeviceTimeOut);
    }
    pollDevicePairingStatus(interval, timeout) {
        let endTime = Number(new Date()) + timeout;
        const checkCondition = (resolve, reject) => {
            this.sdk.deviceLiveStreamService
                .getDevicePairingStatus(this.consumer, 'TYTO_LIVESTREAM')
                .then((response) => {
                if (response.devicePairingStatus.toString() ==
                    'PAIRED' &&
                    response.isDeviceOnline) {
                    this.isPaired = true;
                    this.pairedDeviceSuccess.emit();
                    this.clearTimeout();
                    Promise.resolve(resolve);
                }
                else if (Number(new Date()) < endTime &&
                    response.devicePairingStatus.toString() ==
                        'PAIRED') {
                    this.pollingTimeoutId = setTimeout(checkCondition, interval, reject);
                }
                else {
                    this.clearTimeout();
                    this.displayStep.emit(TytoWizardScreenType.PAIRING_ERROR);
                }
            })
                .catch(() => {
                this.displayErrorScreenBasedOnErrorCounter();
                Promise.reject("error");
            });
        };
        return new Promise(checkCondition);
    }
    fetchQRCode(ssId, ssIdPwd) {
        return this.sdk.deviceLiveStreamService.appendQRCode(this.consumer, {
            type: 'TYTO_LIVESTREAM',
            container: this.qrCodeElement,
            SSID: ssId,
            SSIDPassword: ssIdPwd
        });
    }
    clearTimeout() {
        clearTimeout(this.pollingTimeoutId);
        clearTimeout(this.qrTimeToLiveTimeout);
    }
    displayErrorScreenBasedOnErrorCounter() {
        this.clearTimeout();
        this.showErrorPage.emit();
    }
    onBackBtnPress() {
        this.displayStep.emit(TytoWizardScreenType.SETUP_DEVICE);
    }
    render() {
        return (h("div", null,
            h("div", { class: "qrcode_img" },
                this.hasQRCode && (h("p", { class: "scanQrCodeText" }, this.messages.amwell_tyto_device_qrCodePageDesc)),
                h("div", { class: "qrcode_img", ref: (el) => (this.qrCodeElement = el) })),
            !this.hasQRCode && (h("div", null,
                h("loading-spinner", null),
                h("p", { class: "tytoLoadingSpinnerMsg" }, this.messages.amwell_tyto_device_trying_to_pairing))),
            this.hasQRCode && (h("div", { class: "buttons-container" },
                h("button", { type: "button", class: "whiteBtn", onClick: () => this.onBackBtnPress() }, this.messages.amwell_tyto_device_misc_back),
                h("button", { type: "button", class: "blueBtn", onClick: () => this.beginPollingPairingStatus() }, this.messages.amwell_tyto_device_misc_continue)))));
    }
    static get is() { return "tyto-qr-code"; }
    static get originalStyleUrls() { return {
        "$": ["tyto-qr-code.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tyto-qr-code.css"]
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
        "hasQRCode": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "has-q-r-code",
            "reflect": false,
            "defaultValue": "false"
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
        }, {
            "method": "startNewQRCodeProcess",
            "name": "startNewQRCodeProcess",
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
            "method": "pairedDeviceSuccess",
            "name": "pairedDeviceSuccess",
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
            "method": "showErrorPage",
            "name": "showErrorPage",
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
    static get methods() { return {
        "handleCreateNewQRCode": {
            "complexType": {
                "signature": "(ssid: string, ssidPwd: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
