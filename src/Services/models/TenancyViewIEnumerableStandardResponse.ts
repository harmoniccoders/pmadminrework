/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenancyView } from './TenancyView';

export type TenancyViewIEnumerableStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<TenancyView> | null;
    statusCode?: string | null;
    errors?: any;
};

