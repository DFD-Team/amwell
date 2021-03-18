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
import defaultMessages from "./messages.default";
import { TytoWizardScreenType } from "./tyto-wizard-screen-type.model";
export class TytoDeviceWizard {
    constructor() {
        this.messages = defaultMessages;
        this.isTytoDevicePaired = false;
    }
    async initialize(sdk, options) {
        this.sdk = sdk;
        this.visit = options.visit;
        this.consumer = this.visit.consumerProxy
            ? this.visit.consumerProxy
            : this.visit.consumer;
        Object.assign(this.messages, options.messages);
        this.sdk.deviceLiveStreamService
            .getDevicePairingStatus(this.visit.consumerProxy
            ? this.visit.consumerProxy
            : this.visit.consumer, "TYTO_LIVESTREAM")
            .then((response) => {
            if (response.devicePairingStatus.toString() === "PAIRED") {
                this.initializeStep = TytoWizardScreenType.DEVICE_PAIRED;
                this.isTytoDevicePaired = true;
            }
            else {
                this.initializeStep = TytoWizardScreenType.TYTO_DEVICE_INTAKE;
            }
        })
            .catch(() => {
            this.initializeStep = TytoWizardScreenType.TYTO_DEVICE_INTAKE;
        });
    }
    async destroy() {
        this.sdk = null;
        this.visit = null;
    }
    render() {
        return (h("div", null,
            h("tyto-stepper", { sdk: this.sdk, consumer: this.consumer, initializeStep: this.initializeStep, isTytoDevicePaired: this.isTytoDevicePaired })));
    }
    static get is() { return "amwell-tyto-device"; }
    static get originalStyleUrls() { return {
        "$": ["../../../node_modules/awsdk/lib/awsdk.css", "amwell-tyto-device.css", "../shared.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../../../node_modules/awsdk/lib/awsdk.css", "amwell-tyto-device.css", "../shared.css"]
    }; }
    static get properties() { return {
        "initializeStep": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "TytoWizardScreenType",
                "resolved": "TytoWizardScreenType.DEVICE_PAIRED | TytoWizardScreenType.PAIRING_ERROR | TytoWizardScreenType.QRCODE_SCREEN | TytoWizardScreenType.REGENERATE_QRCODE | TytoWizardScreenType.SERVICE_UNAVAILABLE | TytoWizardScreenType.SETUP_DEVICE | TytoWizardScreenType.TRY_AGAIN | TytoWizardScreenType.TYTO_DEVICE_INTAKE",
                "references": {
                    "TytoWizardScreenType": {
                        "location": "import",
                        "path": "./tyto-wizard-screen-type.model"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "initialize-step",
            "reflect": false
        }
    }; }
    static get states() { return {
        "sdk": {},
        "visit": {},
        "messages": {}
    }; }
    static get methods() { return {
        "initialize": {
            "complexType": {
                "signature": "(sdk: awsdk.AWSDK, options: { visit: awsdk.AWSDKVisit; messages?: { [key: string]: string; }; locale?: string; }) => Promise<void>",
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
                    },
                    "awsdk": {
                        "location": "import",
                        "path": "../../awsdk"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "destroy": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
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
