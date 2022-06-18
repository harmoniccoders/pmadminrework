/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestViewPagedCollection } from './RequestViewPagedCollection';

export type RequestViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: RequestViewPagedCollection;
    statusCode?: string | null;
    errors?: any;
};

