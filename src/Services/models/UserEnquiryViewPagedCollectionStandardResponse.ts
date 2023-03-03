/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserEnquiryViewPagedCollection } from './UserEnquiryViewPagedCollection';

export type UserEnquiryViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: UserEnquiryViewPagedCollection;
    statusCode?: string | null;
    errors?: any;
};

