/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LandSearchView } from './LandSearchView';
import type { Link } from './Link';

export type LandSearchViewPagedCollection = {
    offset?: number | null;
    limit?: number | null;
    size?: number;
    first?: Link;
    previous?: Link;
    next?: Link;
    last?: Link;
    self?: Link;
    value?: Array<LandSearchView> | null;
};

