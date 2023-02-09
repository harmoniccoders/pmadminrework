/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InspectionDate } from './InspectionDate';

export type InspectionTime = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    inspectionDateId?: number;
    inspectionDate?: InspectionDate;
    availableTime?: string;
    isAvailable?: boolean;
};
