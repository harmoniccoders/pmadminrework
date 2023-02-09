/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MediaView } from './MediaView';

export type MediaViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: MediaView;
    statusCode?: string | null;
    errors?: any;
};
