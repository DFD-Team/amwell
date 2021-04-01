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
import { FunctionalComponent } from '../../stencil-public-runtime';
interface ModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    closeOnClick?: Function;
    button1Text?: string;
    button1OnClick?: Function;
    button2Text?: string;
    button2OnClick?: Function;
}
declare const Modal: FunctionalComponent<ModalProps>;
export default Modal;
