/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Property } from './Property';

export type RequestView = {
    id?: number;
    property?: Property;
    comment?: string | null;
    budget?: string | null;
    isCleaning?: boolean;
    isFixing?: boolean;
    status?: string | null;
};

