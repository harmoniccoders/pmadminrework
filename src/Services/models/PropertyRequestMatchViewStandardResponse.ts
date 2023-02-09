/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyRequestMatchView } from './PropertyRequestMatchView';

export type PropertyRequestMatchViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: PropertyRequestMatchView;
    statusCode?: string | null;
    errors?: any;
};
