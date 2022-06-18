/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyRequestView } from './PropertyRequestView';

export type PropertyRequestViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: PropertyRequestView;
    statusCode?: string | null;
    errors?: any;
};

