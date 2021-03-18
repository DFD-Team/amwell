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
const ChatIcon = () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32" },
    h("path", { d: "M6.121 25.274v-3.363H4.364c-.804 0-1.457-.775-1.457-1.726v-8.928c0-.952.653-1.726 1.457-1.726h6.011v5.61c0 2.076 1.63 3.765 3.632 3.765h2.868v1.279c0 .951-.654 1.726-1.457 1.726H9.099l-2.978 3.363zm6.161-15.742h3.136c.803 0 1.457.774 1.457 1.725V17h-2.868c-.951 0-1.725-.834-1.725-1.859V9.532zM25.554 17v3.66L20.975 17h-2.193v-5.743c0-2.003-1.509-3.632-3.364-3.632h-3.136V5.766c0-1.026.774-1.86 1.726-1.86H27.4c.951 0 1.725.834 1.725 1.86v9.375c0 1.025-.774 1.859-1.725 1.859h-1.846zM14.007 2c-2.002 0-3.632 1.689-3.632 3.766v1.86H4.364C2.509 7.626 1 9.255 1 11.257v8.928c0 1.948 1.429 3.543 3.214 3.628v5.569l5.582-5.565h5.621c1.856 0 3.365-1.629 3.365-3.632v-1.279h1.524l7.153 5.716v-5.716c1.976-.033 3.573-1.71 3.573-3.765V5.766C31.032 3.689 29.403 2 27.4 2H14.007z" })));
export default ChatIcon;
