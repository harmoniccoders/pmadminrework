/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentRatesView } from './PaymentRatesView';

export type PaymentRatesViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: PaymentRatesView;
    statusCode?: string | null;
    errors?: any;
};
