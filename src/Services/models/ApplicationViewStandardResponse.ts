/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationView } from './ApplicationView';

export type ApplicationViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ApplicationView;
    statusCode?: string | null;
    errors?: any;
};

