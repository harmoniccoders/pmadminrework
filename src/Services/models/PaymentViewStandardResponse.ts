/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentView } from './PaymentView';

export type PaymentViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: PaymentView;
    statusCode?: string | null;
    errors?: any;
};
