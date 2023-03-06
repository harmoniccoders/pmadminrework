/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Property } from './Property';
import type { User } from './User';

export type Report = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    propertyId?: number;
    userId?: number | null;
    user?: User;
    description?: string | null;
    email?: string | null;
    property?: Property;
};
