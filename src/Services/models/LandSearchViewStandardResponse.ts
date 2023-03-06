/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LandSearchView } from './LandSearchView';
import type { RequestError } from './RequestError';

export type LandSearchViewStandardResponse = {
    data?: LandSearchView;
    error?: RequestError;
};
