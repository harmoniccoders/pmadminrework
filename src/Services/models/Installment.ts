/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RentRelief } from './RentRelief';
import type { Status } from './Status';

export type Installment = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    amount?: number;
    dateDue?: string;
    statusId?: number;
    status?: Status;
    rentReliefId?: number;
    rentRelief?: RentRelief;
    paidOn?: string;
};
