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
const ReloadIcon = () => (h("svg", { width: "32", height: "32", viewBox: "0 0 32 32" },
    h("g", { fill: "none", "fill-rule": "evenodd" },
        h("g", { transform: "translate(3 3.518)" },
            h("mask", null,
                h("path", { d: "M0 .865h25.385V26.25H0z" })),
            h("path", { d: "M24.2 10.953h-.028c-.668 0-1.157.598-1.066 1.259a9.677 9.677 0 0 1-.628 4.999c-1.527 3.804-5.045 6.585-9.137 6.832-6.754.408-12.254-5.605-10.964-12.501.786-4.212 4.193-7.57 8.41-8.32 2.848-.506 5.531.152 7.674 1.566h.77a.95.95 0 0 0 .95-.95V3.34A12.584 12.584 0 0 0 10.988.979C5.094 1.76.46 6.694.034 12.624c-.584 8.123 6.525 14.792 14.772 13.454 4.847-.786 8.854-4.43 10.132-9.172.464-1.723.548-3.403.34-4.991a1.093 1.093 0 0 0-1.079-.962", mask: "url(#b)" })),
        h("path", { d: "M23.663 10.229l-5.866.45a1.095 1.095 0 0 1-.168-2.182l4.94-.379-.38-4.941a1.094 1.094 0 0 1 2.183-.167l.45 5.865a1.26 1.26 0 0 1-1.16 1.354" }))));
export default ReloadIcon;
