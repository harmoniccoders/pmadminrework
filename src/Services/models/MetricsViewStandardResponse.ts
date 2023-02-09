/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricsView } from './MetricsView';

export type MetricsViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: MetricsView;
    statusCode?: string | null;
    errors?: any;
};
