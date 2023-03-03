/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplaintsCategory } from './ComplaintsCategory';

export type ComplaintsSubCategory = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    name?: string | null;
    complantsCategoryId?: number;
    complantsCategory?: ComplaintsCategory;
};

