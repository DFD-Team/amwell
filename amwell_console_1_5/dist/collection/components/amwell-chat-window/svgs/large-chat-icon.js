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
const LargeChatIcon = () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "128", height: "128" },
    h("path", { d: "M64 125c33.69 0 61-27.31 61-61S97.69 3 64 3 3 30.31 3 64s27.31 61 61 61zm0 3C28.654 128 0 99.346 0 64 0 28.654 28.654 0 64 0c35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z" }),
    h("path", { transform: "translate(28 28)", d: "M13.772 56.867V49.3H9.82c-1.809 0-3.278-1.744-3.278-3.884V25.328c0-2.142 1.469-3.883 3.278-3.883h13.525v12.622c0 4.671 3.667 8.471 8.172 8.471h6.453v2.878c0 2.14-1.472 3.884-3.279 3.884H20.474l-6.7 7.567zm13.862-35.42h7.056c1.807 0 3.279 1.742 3.279 3.881V38.25h-6.453c-2.14 0-3.881-1.877-3.881-4.183v-12.62zM57.496 38.25v8.235L47.194 38.25H42.26V25.328c0-4.506-3.396-8.172-7.57-8.172h-7.055v-4.182c0-2.309 1.741-4.185 3.883-4.185H61.65c2.14 0 3.881 1.876 3.881 4.184v21.094c0 2.306-1.741 4.183-3.881 4.183h-4.154zM31.516 4.5c-4.505 0-8.172 3.8-8.172 8.473v4.185H9.819c-4.174 0-7.569 3.666-7.569 8.17v20.088c0 4.383 3.215 7.972 7.232 8.163v12.53L22.04 53.59h12.647c4.176 0 7.572-3.666 7.572-8.173V42.54h3.428l16.095 12.86V42.54c4.446-.075 8.039-3.848 8.039-8.472V12.974c0-4.674-3.665-8.474-8.172-8.474H31.516z" })));
export default LargeChatIcon;
