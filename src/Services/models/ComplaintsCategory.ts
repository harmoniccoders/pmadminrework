/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplaintsSubCategory } from './ComplaintsSubCategory';

export type ComplaintsCategory = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    name?: string | null;
    complaintsSubCategories?: Array<ComplaintsSubCategory> | null;
};

