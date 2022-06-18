/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserViewPagedCollection } from './UserViewPagedCollection';

export type UserViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: UserViewPagedCollection;
    statusCode?: string | null;
    errors?: any;
};

