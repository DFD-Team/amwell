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
export class TytoErrorCallback {
    onTryAgain() {
        this.displayStep.emit(TytoWizardScreenType.SETUP_DEVICE);
    }
    render() {
        return ([
            h("div", { class: "tyto-msg-wrapper" },
                h("span", { class: "tyto_bg_img tyto-error" }),
                h("div", { class: "tyto-message-details" },
                    h("h1", null, this.headerMsg),
                    h("p", null, this.bodyMsg))),
            h("div", { class: "buttons-container" }, this.buttonMsg && (h("button", { type: "button", class: "whiteBtn", onClick: () => this.onTryAgain() }, this.buttonMsg)))
        ]);
    }
    static get is() { return "tyto-error-callback"; }
    static get originalStyleUrls() { return {
        "$": ["../tyto-base64-images.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../tyto-base64-images.css"]
    }; }
    static get properties() { return {
        "headerMsg": {
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
            "attribute": "header-msg",
            "reflect": false
        },
        "bodyMsg": {
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
            "attribute": "body-msg",
            "reflect": false
        },
        "buttonMsg": {
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
            "attribute": "button-msg",
            "reflect": false
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
