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
const DrawerButton = (props, children) => (h("div", { class: { 'drawer-button': true, [props.className]: true, 'selected': props.selected }, onClick: (e) => props.onClick(e) },
    h("div", { class: "drawer-icon" }, children),
    h("div", { class: "drawer-button-label" }, props.name),
    props.showNotificationDot && h("div", { class: "notification-dot" })));
export default DrawerButton;
