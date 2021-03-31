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
import { h } from "@stencil/core";
import defaultMessages from './messages.default';
export class VideoConsole {
    constructor() {
        this.messages = defaultMessages;
    }
    async initialize(sdk, options) {
        this.sdk = sdk;
        this.visit = options.visit;
        this.messages = Object.assign({}, defaultMessages, options.messages);
        // filter messages only to the ones that are for the video console and remove the widget prefix
        const filtered = Object.keys(this.messages)
            .filter(key => key.startsWith('amwell_video_console_'))
            .reduce((obj, key) => {
            obj[key.substring(21)] = this.messages[key];
            return obj;
        }, {});
        const contextElements = {
            // success is only called when visit ends, so pass back ended visit obj
            successCallback: (visit) => {
                this.visit = null;
                this.visitEnd.emit({ visit });
            },
            // error callback is not only called when visit ends, also has inconsistent non-visit error field usage
            // so just sending the first one FIXME: this should be less terrible and more consistent.
            errorCallback: (visit, error) => {
                this.visitError.emit({ visit, error });
            },
            // just send back the most up to date visit
            updatedCallback: (visit) => {
                this.visit = visit;
                this.visitUpdated.emit({ visit });
            },
            videoConsoleContainer: this.container,
            attachPoints: null,
            messages: filtered,
            locale: options.locale
        };
        const videoContext = this.sdk.visitService.createVideoContext(contextElements);
        return this.sdk.visitService.startWebRTCVisit(this.visit, videoContext)
            .then((videoConsole) => {
            this.videoConsole = videoConsole;
            return true;
        });
    }
    async destroy() {
        this.sdk = null;
        this.visit = null;
        if (this.videoConsole) {
            this.videoConsole.stop();
        }
    }
    async refresh() {
        if (this.videoConsole) {
            this.videoConsole.refresh();
        }
    }
    render() {
        return (h("div", { class: "video-console", ref: (el) => this.container = el, dir: document.documentElement.dir }));
    }
    static get is() { return "amwell-video-console"; }
    static get originalStyleUrls() { return {
        "$": ["../../../node_modules/awsdk/lib/awsdk.css", "video-console.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../../../node_modules/awsdk/lib/awsdk.css", "video-console.css"]
    }; }
    static get states() { return {
        "sdk": {},
        "visit": {},
        "messages": {}
    }; }
    static get events() { return [{
            "method": "visitUpdated",
            "name": "visitUpdated",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Called whenever the visit is updated.\nevent.detail is an object with the latest visit."
            },
            "complexType": {
                "original": "{ visit: awsdk.AWSDKVisit}",
                "resolved": "{ visit: AWSDKVisit; }",
                "references": {
                    "awsdk": {
                        "location": "import",
                        "path": "../../awsdk"
                    }
                }
            }
        }, {
            "method": "visitError",
            "name": "visitError",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Called when the visit encounters an error.\nevent.detail is an object with the latest visit and an error field."
            },
            "complexType": {
                "original": "{ visit: awsdk.AWSDKVisit, error: any }",
                "resolved": "{ visit: AWSDKVisit; error: any; }",
                "references": {
                    "awsdk": {
                        "location": "import",
                        "path": "../../awsdk"
                    }
                }
            }
        }, {
            "method": "visitEnd",
            "name": "visitEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Called when the visit ends.\nevent.detail is an object with the ended visit."
            },
            "complexType": {
                "original": "{ visit: awsdk.AWSDKVisit}",
                "resolved": "{ visit: AWSDKVisit; }",
                "references": {
                    "awsdk": {
                        "location": "import",
                        "path": "../../awsdk"
                    }
                }
            }
        }]; }
    static get methods() { return {
        "initialize": {
            "complexType": {
                "signature": "(sdk: awsdk.AWSDK, options: { visit: awsdk.AWSDKVisit; messages?: { [key: string]: string; }; locale?: string; }) => Promise<boolean>",
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
                "return": "Promise<boolean>"
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
        },
        "refresh": {
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
