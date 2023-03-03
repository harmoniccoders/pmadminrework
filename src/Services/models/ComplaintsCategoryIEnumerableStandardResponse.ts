/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplaintsCategory } from './ComplaintsCategory';

export type ComplaintsCategoryIEnumerableStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<ComplaintsCategory> | null;
    statusCode?: string | null;
    errors?: any;
};

