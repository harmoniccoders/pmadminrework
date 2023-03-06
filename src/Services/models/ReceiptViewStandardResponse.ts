/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReceiptView } from './ReceiptView';

export type ReceiptViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ReceiptView;
    statusCode?: string | null;
    errors?: any;
};
