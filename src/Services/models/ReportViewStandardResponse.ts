/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportView } from './ReportView';

export type ReportViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ReportView;
    statusCode?: string | null;
    errors?: any;
};

