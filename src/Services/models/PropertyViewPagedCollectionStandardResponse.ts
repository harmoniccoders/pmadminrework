/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyViewPagedCollection } from './PropertyViewPagedCollection';

export type PropertyViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: PropertyViewPagedCollection;
    statusCode?: string | null;
    errors?: any;
};

