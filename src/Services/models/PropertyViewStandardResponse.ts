/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyView } from './PropertyView';

export type PropertyViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: PropertyView;
    statusCode?: string | null;
    errors?: any;
};

