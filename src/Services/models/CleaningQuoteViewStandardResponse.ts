/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CleaningQuoteView } from './CleaningQuoteView';

export type CleaningQuoteViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: CleaningQuoteView;
    statusCode?: string | null;
    errors?: any;
};
