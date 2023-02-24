/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationViewPagedCollection } from './ApplicationViewPagedCollection';

export type ApplicationViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ApplicationViewPagedCollection;
    statusCode?: string | null;
    errors?: any;
};

