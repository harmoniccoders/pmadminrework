/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserEnquiryPagedCollection } from './UserEnquiryPagedCollection';

export type UserEnquiryPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: UserEnquiryPagedCollection;
    statusCode?: string | null;
    errors?: any;
};
