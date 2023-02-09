/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplaintsSubCategory } from './ComplaintsSubCategory';
import type { Property } from './Property';
import type { Status } from './Status';
import type { User } from './User';

export type Complaints = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    complaintsSubCategoryId?: number;
    complaintsSubCategory?: ComplaintsSubCategory;
    comment?: string | null;
    userId?: number;
    user?: User;
    statusId?: number;
    status?: Status;
    propertyId?: number;
    property?: Property;
};
