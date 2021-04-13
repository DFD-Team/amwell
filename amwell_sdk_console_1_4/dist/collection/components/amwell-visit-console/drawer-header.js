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
const DrawerHeader = (props) => (h("div", { class: "visit-drawer-header" },
    h("div", { class: "visit-drawer-title" }, props.name),
    h("div", { class: "visit-drawer-close-button", onClick: (e) => props.onCloseClicked(e) },
        h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
            h("path", { id: "a", d: "M10.943 12L4 5.057 5.057 4 12 10.943 18.943 4 20 5.057 13.057 12 20 18.943 18.943 20 12 13.057 5.057 20 4 18.943 10.943 12z" })))));
export default DrawerHeader;
