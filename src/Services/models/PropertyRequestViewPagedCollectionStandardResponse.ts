/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyRequestViewPagedCollection } from './PropertyRequestViewPagedCollection';

export type PropertyRequestViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: PropertyRequestViewPagedCollection;
    statusCode?: string | null;
    errors?: any;
};

