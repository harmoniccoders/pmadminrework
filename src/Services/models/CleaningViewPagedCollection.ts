/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CleaningView } from './CleaningView';
import type { Link } from './Link';

export type CleaningViewPagedCollection = {
    offset?: number | null;
    limit?: number | null;
    size?: number;
    first?: Link;
    previous?: Link;
    next?: Link;
    last?: Link;
    self?: Link;
    value?: Array<CleaningView> | null;
};
