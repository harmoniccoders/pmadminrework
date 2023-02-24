/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportViewPagedCollection } from './ReportViewPagedCollection';

export type ReportViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ReportViewPagedCollection;
    statusCode?: string | null;
    errors?: any;
};

