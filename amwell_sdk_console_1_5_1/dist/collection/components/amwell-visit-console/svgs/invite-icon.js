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
const InviteIcon = () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32" },
    h("g", { fill: "none", "stroke-width": "2" },
        h("path", { "stroke-linecap": "round", d: "M31 13h-7M27.5 9.5v7" }),
        h("path", { d: "M15.032 3c4.345 0 7.775 6.185 3.934 12.044-1.442 2.2-1.22 3.84 4.521 5.435 2.626.73 3.513 1.325 3.513 3.268V27a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3.253c0-1.943.887-2.539 3.513-3.268 5.742-1.595 5.963-3.235 4.52-5.435C7.194 9.185 10.624 3 14.969 3h.064z" }))));
export default InviteIcon;
