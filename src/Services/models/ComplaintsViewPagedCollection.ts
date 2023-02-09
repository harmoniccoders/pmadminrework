/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplaintsView } from './ComplaintsView';
import type { Link } from './Link';

export type ComplaintsViewPagedCollection = {
    offset?: number | null;
    limit?: number | null;
    size?: number;
    first?: Link;
    previous?: Link;
    next?: Link;
    last?: Link;
    self?: Link;
    value?: Array<ComplaintsView> | null;
};
