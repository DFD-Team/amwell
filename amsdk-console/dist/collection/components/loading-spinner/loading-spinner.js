import { h } from "@stencil/core";
export class LoadingSpinner {
    render() {
        return (h("div", { class: "loading-spinner" },
            h("svg", { class: "circle-svg", viewBox: "25 25 50 50" },
                h("circle", { class: "circle-stroke-static", fill: "none", cx: "50", cy: "50", r: "20", "stroke-width": "2", "stroke-miterlimit": "10" }))));
    }
    static get is() { return "loading-spinner"; }
    static get originalStyleUrls() { return {
        "$": ["loading-spinner.css"]
    }; }
    static get styleUrls() { return {
        "$": ["loading-spinner.css"]
    }; }
}
