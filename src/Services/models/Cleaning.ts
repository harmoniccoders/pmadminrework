/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CleaningQuote } from './CleaningQuote';
import type { PropertyType } from './PropertyType';
import type { Status } from './Status';
import type { User } from './User';

export type Cleaning = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    buildingState?: string | null;
    propertyTypeId?: number;
    propertyType?: PropertyType;
    dateNeeded?: string;
    numberOfBathrooms?: number;
    numberOfBedrooms?: number;
    numberOfFloors?: number;
    buildingType?: string | null;
    userId?: number;
    user?: User;
    statusId?: number;
    location?: string | null;
    status?: Status;
    cleaningQuotes?: Array<CleaningQuote> | null;
};

