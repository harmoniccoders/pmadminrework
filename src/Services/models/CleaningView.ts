/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CleaningQuoteView } from './CleaningQuoteView';
import type { LeanUserView } from './LeanUserView';

export type CleaningView = {
    id?: number;
    buildingState?: string | null;
    propertyTypeId?: number;
    propertyType?: string | null;
    dateNeeded?: string;
    numberOfBathrooms?: number;
    numberOfBedrooms?: number;
    numberOfFloors?: number;
    buildingType?: string | null;
    fileName?: string | null;
    fileNumber?: string | null;
    status?: string | null;
    dateCreated?: string;
    userId?: number;
    user?: LeanUserView;
    location?: string | null;
    cleaningQuotes?: Array<CleaningQuoteView> | null;
};
