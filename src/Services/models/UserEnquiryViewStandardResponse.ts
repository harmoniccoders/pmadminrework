/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserEnquiryView } from './UserEnquiryView';

export type UserEnquiryViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: UserEnquiryView;
    statusCode?: string | null;
    errors?: any;
};

