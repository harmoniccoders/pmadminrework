/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Property } from './Property';
import type { PropertyRequest } from './PropertyRequest';

export type PropertyRequestMatch = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    propertyId?: number;
    property?: Property;
    propertyRequestId?: number;
    propertyRequest?: PropertyRequest;
};

