/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SingleError } from './SingleError';

export type RequestError = {
    errors?: Array<SingleError> | null;
    code?: number;
    message?: string | null;
    errorResponseContent?: string | null;
};

