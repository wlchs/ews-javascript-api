"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the legacy free/busy status associated with an appointment.
 */
var LegacyFreeBusyStatus;
(function (LegacyFreeBusyStatus) {
    /**
     * The time slot associated with the appointment appears as free.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus[0] = "Free"] = "Free";
    /**
     * The time slot associated with the appointment appears as tentative.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus[1] = "Tentative"] = "Tentative";
    /**
     * The time slot associated with the appointment appears as busy.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus[2] = "Busy"] = "Busy";
    /**
     * The time slot associated with the appointment appears as Out of Office.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus[3] = "OOF"] = "OOF";
    /**
     * The time slot associated with the appointment appears as working else where.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus[4] = "WorkingElsewhere"] = "WorkingElsewhere";
    /**
     * No free/busy status is associated with the appointment.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus[5] = "NoData"] = "NoData";
})(LegacyFreeBusyStatus = exports.LegacyFreeBusyStatus || (exports.LegacyFreeBusyStatus = {}));
