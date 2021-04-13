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
export declare class TytoErrorCallback {
    displayStep: EventEmitter;
    headerMsg: string;
    bodyMsg: string;
    buttonMsg: string;
    onTryAgain(): void;
    render(): any[];
}
