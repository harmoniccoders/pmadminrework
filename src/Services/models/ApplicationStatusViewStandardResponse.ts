/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationStatusView } from './ApplicationStatusView';

export type ApplicationStatusViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ApplicationStatusView;
    statusCode?: string | null;
    errors?: any;
};

