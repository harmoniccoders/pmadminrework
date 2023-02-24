/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionPagedCollection } from './TransactionPagedCollection';

export type TransactionPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: TransactionPagedCollection;
    statusCode?: string | null;
    errors?: any;
};

