/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplaintsSubCategory } from './ComplaintsSubCategory';

export type ComplaintsSubCategoryStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ComplaintsSubCategory;
    statusCode?: string | null;
    errors?: any;
};
