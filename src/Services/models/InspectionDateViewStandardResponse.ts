/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InspectionDateView } from './InspectionDateView';

export type InspectionDateViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: InspectionDateView;
    statusCode?: string | null;
    errors?: any;
};

