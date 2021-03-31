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
interface SidebarButtonProps {
    name: string;
    className: string;
    selected?: boolean;
    showNotificationDot?: boolean;
    onClick: Function;
}
declare const DrawerButton: FunctionalComponent<SidebarButtonProps>;
export default DrawerButton;
