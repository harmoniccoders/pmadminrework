/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationView } from './ApplicationView';
import type { Link } from './Link';

export type ApplicationViewPagedCollection = {
    offset?: number | null;
    limit?: number | null;
    size?: number;
    first?: Link;
    previous?: Link;
    next?: Link;
    last?: Link;
    self?: Link;
    value?: Array<ApplicationView> | null;
};

