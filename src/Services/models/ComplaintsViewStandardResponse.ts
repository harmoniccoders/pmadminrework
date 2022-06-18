/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplaintsView } from './ComplaintsView';

export type ComplaintsViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ComplaintsView;
    statusCode?: string | null;
    errors?: any;
};

