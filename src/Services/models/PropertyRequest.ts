/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyRequestMatch } from './PropertyRequestMatch';
import type { PropertyType } from './PropertyType';
import type { Status } from './Status';
import type { User } from './User';

export type PropertyRequest = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    propertyTypeId?: number;
    propertyType?: PropertyType;
    state?: string | null;
    lga?: string | null;
    budget?: number;
    comment?: string | null;
    numberOfBedRooms?: number;
    numberOfBathrooms?: number;
    userId?: number;
    user?: User;
    statusId?: number;
    status?: Status;
    matches?: Array<PropertyRequestMatch> | null;
};

