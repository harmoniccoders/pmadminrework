/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplaintsViewPagedCollection } from './ComplaintsViewPagedCollection';

export type ComplaintsViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ComplaintsViewPagedCollection;
    statusCode?: string | null;
    errors?: any;
};
