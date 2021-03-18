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
import SimpleBar from 'simplebar';
import NotesSection from './notes-section';
import NotesEntry from './notes-entry';
import defaultMessages from './messages.default';
export class VisitNotes {
    constructor() {
        this.messages = defaultMessages;
    }
    async initialize(sdk, options) {
        this.sdk = sdk;
        this.visit = options.visit;
        Object.assign(this.messages, options.messages);
    }
    async destroy() {
        this.sdk = null;
        this.visit = null;
        this.notesExist = false;
        this.prescriptionsExist = false;
        this.diagnosesExist = false;
        this.proceduresExist = false;
        this.agendaItemsExist = false;
        this.postVisitItemsExist = false;
    }
    isNonEmpty(list) {
        return Array.isArray(list) && list.length > 0;
    }
    haveEntriesChanged(newEntries, oldEntries, comparisonKey) {
        const newEntriesExist = this.isNonEmpty(newEntries);
        const oldEntriesExist = this.isNonEmpty(oldEntries);
        // if old and new entries exist, check if they're different at all
        if (newEntriesExist && oldEntriesExist) {
            return !((newEntries.length === oldEntries.length) && newEntries.every((newEntry) => oldEntries.find((oldEntry) => newEntry[comparisonKey] === oldEntry[comparisonKey])));
        }
        // otherwise return only if old/new exists and did/didn't before
        return (newEntriesExist && !oldEntriesExist) || (!newEntriesExist && oldEntriesExist);
    }
    visitUpdated(newVisit, oldVisit) {
        if (!newVisit)
            return;
        if (newVisit.providerEntries) {
            this.notesExist = !!newVisit.providerEntries.notes;
            this.prescriptionsExist = this.isNonEmpty(newVisit.providerEntries.prescriptions);
            this.diagnosesExist = this.isNonEmpty(newVisit.providerEntries.diagnoses);
            this.proceduresExist = this.isNonEmpty(newVisit.providerEntries.procedures);
            this.agendaItemsExist = this.isNonEmpty(newVisit.providerEntries.agendaItemFollowUps);
            this.postVisitItemsExist = this.isNonEmpty(newVisit.providerEntries.postVisitFollowUpItems);
            // check if there has been any delta in the provider entries and emit event if there has
            if (oldVisit && oldVisit.providerEntries) {
                const notesChanged = newVisit.providerEntries.notes !== oldVisit.providerEntries.notes;
                const prescriptionsChanged = this.haveEntriesChanged(newVisit.providerEntries.prescriptions, oldVisit.providerEntries.prescriptions, 'description');
                const diagnosesChanged = this.haveEntriesChanged(newVisit.providerEntries.diagnoses, oldVisit.providerEntries.diagnoses, 'displayName');
                const proceduresChanged = this.haveEntriesChanged(newVisit.providerEntries.procedures, oldVisit.providerEntries.procedures, 'displayName');
                const agendaItemsChanged = this.haveEntriesChanged(newVisit.providerEntries.agendaItemFollowUps, oldVisit.providerEntries.agendaItemFollowUps, 'description');
                const postVisitItemsChanged = this.haveEntriesChanged(newVisit.providerEntries.postVisitFollowUpItems, oldVisit.providerEntries.postVisitFollowUpItems, 'description');
                if (notesChanged || prescriptionsChanged || diagnosesChanged || proceduresChanged || agendaItemsChanged || postVisitItemsChanged) {
                    this.newNotesReceived.emit();
                }
            }
        }
    }
    componentDidLoad() {
        // attach custom scrollbar to the transcript or fallback to default if no shadowDom support
        if (document.head.attachShadow) {
            const simpleBar = new SimpleBar(this.notesSection, { autoHide: false, direction: document.documentElement.dir });
            this.notesScroll = simpleBar.getScrollElement();
        }
        else {
            this.notesScroll = this.notesSection;
        }
    }
    componentDidUpdate() {
        this.showAnchors = this.notesScroll && (this.notesScroll.scrollHeight > this.notesScroll.clientHeight);
    }
    scrollToNotesSection(e, anchor) {
        e.preventDefault();
        this.notesScroll.scrollTop = anchor.offsetTop - this.notesScroll.offsetTop;
    }
    render() {
        return (h("div", { class: "visit-notes", dir: document.documentElement.dir },
            h("div", { class: { "notes-anchors": true, "hidden": !this.showAnchors } },
                this.notesExist &&
                    h("button", { onClick: (e) => this.scrollToNotesSection(e, this.notesAnchor) }, this.messages.amwell_visit_notes_notes_title),
                this.prescriptionsExist &&
                    h("button", { onClick: (e) => this.scrollToNotesSection(e, this.prescriptionsAnchor) }, this.messages.amwell_visit_notes_prescriptions_title),
                (this.diagnosesExist || this.proceduresExist) &&
                    h("button", { onClick: (e) => this.scrollToNotesSection(e, this.diagnosesAndProceduresAnchor) }, this.messages.amwell_visit_notes_diagnoses_and_procedures_title),
                (this.agendaItemsExist || this.postVisitItemsExist) &&
                    h("button", { onClick: (e) => this.scrollToNotesSection(e, this.additionalItemsAnchor) }, this.messages.amwell_visit_notes_additional_items_title)),
            h("div", { ref: (el) => this.notesSection = el, class: "notes-sections", "data-simplebar-direction": document.documentElement.dir },
                !this.notesExist
                    && !this.prescriptionsExist
                    && !this.diagnosesExist
                    && !this.proceduresExist
                    && !this.agendaItemsExist
                    && !this.postVisitItemsExist &&
                    h("div", { class: "no-notes-placeholder" },
                        h("div", { class: "no-notes-icon" }),
                        h("div", { class: "no-notes-message" }, this.messages.amwell_visit_notes_placeholder)),
                h("div", null,
                    this.notesExist &&
                        h(NotesSection, { ref: (el) => this.notesAnchor = el, class: "notes-section", title: this.messages.amwell_visit_notes_notes_title },
                            h("div", { innerHTML: this.visit.providerEntries.notes })),
                    this.prescriptionsExist &&
                        h(NotesSection, { ref: (el) => this.prescriptionsAnchor = el, class: "notes-section", title: this.messages.amwell_visit_notes_prescriptions_title }, this.visit.providerEntries.prescriptions.map((prescription) => h(NotesEntry, { title: prescription.description, description: prescription.rxInstructions }))),
                    (this.diagnosesExist || this.proceduresExist) &&
                        h(NotesSection, { ref: (el) => this.diagnosesAndProceduresAnchor = el, class: "notes-section", title: this.messages.amwell_visit_notes_diagnoses_and_procedures_title },
                            this.diagnosesExist && this.visit.providerEntries.diagnoses.map((diagnosis) => h(NotesEntry, { title: diagnosis.displayName, description: diagnosis.description })),
                            this.proceduresExist && this.visit.providerEntries.procedures.map((procedure) => h(NotesEntry, { title: procedure.displayName, description: procedure.description }))),
                    (this.agendaItemsExist || this.postVisitItemsExist) &&
                        h(NotesSection, { ref: (el) => this.additionalItemsAnchor = el, class: "notes-section", title: this.messages.amwell_visit_notes_additional_items_title },
                            this.agendaItemsExist && this.visit.providerEntries.agendaItemFollowUps.map((item) => h(NotesEntry, { description: item.description })),
                            this.postVisitItemsExist && this.visit.providerEntries.postVisitFollowUpItems.map((item) => h(NotesEntry, { description: item.description })))))));
    }
    static get is() { return "amwell-visit-notes"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["visit-notes.css", "../shared.css", "../../../node_modules/simplebar/dist/simplebar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["visit-notes.css", "../shared.css", "../../../node_modules/simplebar/dist/simplebar.css"]
    }; }
    static get properties() { return {
        "visit": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "awsdk.AWSDKVisit",
                "resolved": "AWSDKVisit",
                "references": {
                    "awsdk": {
                        "location": "import",
                        "path": "../../awsdk"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get states() { return {
        "sdk": {},
        "showAnchors": {},
        "notesExist": {},
        "prescriptionsExist": {},
        "diagnosesExist": {},
        "proceduresExist": {},
        "agendaItemsExist": {},
        "postVisitItemsExist": {},
        "messages": {}
    }; }
    static get events() { return [{
            "method": "newNotesReceived",
            "name": "newNotesReceived",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "initialize": {
            "complexType": {
                "signature": "(sdk: awsdk.AWSDK, options: { visit: awsdk.AWSDKVisit; messages?: { [key: string]: string; }; }) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "awsdk": {
                        "location": "import",
                        "path": "../../awsdk"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "destroy": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "visit",
            "methodName": "visitUpdated"
        }]; }
}
