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
const NotesIcon = () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32" },
    h("g", { fill: "none", "fill-rule": "nonzero" },
        h("g", { "stroke-width": "1.8", transform: "translate(6 1)" },
            h("path", { d: "M16.486 1.74h3.066c.8 0 1.448.648 1.448 1.448v25.363c0 .8-.648 1.449-1.448 1.449H1.448C.648 30 0 29.351 0 28.55V3.189c0-.8.648-1.449 1.448-1.449h3.44" }),
            h("rect", { width: "10.248", height: "4.548", x: "5.376", y: ".9", rx: "1.449" })),
        h("rect", { width: "11", height: "2", x: "11", y: "12", rx: "1" }),
        h("rect", { width: "11", height: "2", x: "11", y: "17", rx: "1" }),
        h("rect", { width: "11", height: "2", x: "11", y: "22", rx: "1" }))));
export default NotesIcon;
