/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyRequestMatchView } from './PropertyRequestMatchView';
import type { PropertyType } from './PropertyType';
import type { User } from './User';

export type PropertyRequestView = {
    id?: number;
    propertyType?: PropertyType;
    state?: string | null;
    lga?: string | null;
    budget?: number;
    comment?: string | null;
    numberOfBedRooms?: number;
    numberOfBathrooms?: number;
    status?: string | null;
    user?: User;
    matches?: Array<PropertyRequestMatchView> | null;
};

