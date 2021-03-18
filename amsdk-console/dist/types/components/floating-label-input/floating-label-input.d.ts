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
export declare class FloatingLabelInput {
    error?: string;
    type?: string;
    value: string;
    label: string;
    handleOnFocus?: Function;
    handleOnBlur?: Function;
    hasFocus?: boolean;
    render(): any;
}
