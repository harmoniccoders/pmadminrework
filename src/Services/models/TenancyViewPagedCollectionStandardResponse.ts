/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenancyViewPagedCollection } from './TenancyViewPagedCollection';

export type TenancyViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: TenancyViewPagedCollection;
    statusCode?: string | null;
    errors?: any;
};

