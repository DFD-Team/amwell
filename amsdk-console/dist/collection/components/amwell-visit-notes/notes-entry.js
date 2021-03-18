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
const NotesEntry = (props) => (h("div", { class: "notes-entry" },
    props.title &&
        h("h3", null, props.title),
    props.description));
export default NotesEntry;
