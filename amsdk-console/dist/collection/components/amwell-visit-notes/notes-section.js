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
const NotesSection = (props, children) => (h("div", { ref: props.ref, class: props.class },
    h("div", { class: "notes-section-header" }, props.title),
    children));
export default NotesSection;
