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
import { EventEmitter } from '../../stencil-public-runtime';
import { awsdk } from '../../awsdk';
export declare class VisitNotes {
    visit: awsdk.AWSDKVisit;
    newNotesReceived: EventEmitter;
    sdk: awsdk.AWSDK;
    showAnchors: boolean;
    notesExist: boolean;
    prescriptionsExist: boolean;
    diagnosesExist: boolean;
    proceduresExist: boolean;
    agendaItemsExist: boolean;
    postVisitItemsExist: boolean;
    messages: {
        amwell_visit_notes_notes_title: string;
        amwell_visit_notes_prescriptions_title: string;
        amwell_visit_notes_diagnoses_and_procedures_title: string;
        amwell_visit_notes_additional_items_title: string;
        amwell_visit_notes_placeholder: string;
    };
    notesSection: HTMLElement;
    notesScroll: HTMLElement;
    notesAnchor: HTMLElement;
    prescriptionsAnchor: HTMLElement;
    diagnosesAndProceduresAnchor: HTMLElement;
    additionalItemsAnchor: HTMLElement;
    initialize(sdk: awsdk.AWSDK, options: {
        visit: awsdk.AWSDKVisit;
        messages?: {
            [key: string]: string;
        };
    }): Promise<void>;
    destroy(): Promise<void>;
    isNonEmpty(list: any[]): boolean;
    haveEntriesChanged(newEntries: any[], oldEntries: any[], comparisonKey: string): boolean;
    visitUpdated(newVisit: awsdk.AWSDKVisit, oldVisit: awsdk.AWSDKVisit): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    scrollToNotesSection(e: Event, anchor: HTMLElement): void;
    render(): any;
}
