/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Property } from './Property';
import type { User } from './User';

export type UserEnquiry = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    userId?: number | null;
    user?: User;
    propertyId?: number;
    property?: Property;
    active?: boolean;
};
