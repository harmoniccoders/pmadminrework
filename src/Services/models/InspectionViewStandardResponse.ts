/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InspectionView } from './InspectionView';

export type InspectionViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: InspectionView;
    statusCode?: string | null;
    errors?: any;
};
