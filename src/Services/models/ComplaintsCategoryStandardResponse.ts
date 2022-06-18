/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplaintsCategory } from './ComplaintsCategory';

export type ComplaintsCategoryStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ComplaintsCategory;
    statusCode?: string | null;
    errors?: any;
};

