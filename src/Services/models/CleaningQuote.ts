/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cleaning } from './Cleaning';
import type { Status } from './Status';

export type CleaningQuote = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    quote?: number;
    proposedDate?: string;
    statusId?: number;
    status?: Status;
    cleaningId?: number;
    cleaning?: Cleaning;
};
