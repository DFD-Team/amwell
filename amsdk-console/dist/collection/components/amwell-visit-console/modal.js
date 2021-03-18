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
const Modal = (props) => (h("div", { class: { "visit-console-modal-container": true, "hidden": !props.isOpen } },
    h("div", { class: "visit-console-modal" },
        h("div", { class: "visit-console-modal-header" },
            props.title,
            props.closeOnClick &&
                h("button", { onClick: (e) => props.closeOnClick(e) })),
        h("div", { class: "visit-console-modal-body" },
            h("div", { class: "visit-console-modal-content", innerHTML: props.message }),
            h("div", { class: "visit-console-modal-buttons" },
                props.button1Text && h("button", { onClick: (e) => props.button1OnClick && props.button1OnClick(e) }, props.button1Text),
                props.button2Text && h("button", { onClick: (e) => props.button2OnClick && props.button2OnClick(e) }, props.button2Text))))));
export default Modal;
