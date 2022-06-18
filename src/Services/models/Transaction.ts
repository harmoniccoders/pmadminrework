/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Installment } from './Installment';
import type { PaymentLog } from './PaymentLog';
import type { Property } from './Property';
import type { RentRelief } from './RentRelief';
import type { Status } from './Status';
import type { Tenancy } from './Tenancy';
import type { User } from './User';

export type Transaction = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    userId?: number;
    user?: User;
    propertyId?: number | null;
    rentReliefId?: number | null;
    rentRelief?: RentRelief;
    property?: Property;
    transactionReference?: string | null;
    paymentLogId?: number | null;
    paymentLog?: PaymentLog;
    statusId?: number;
    status?: Status;
    amount?: string | null;
    description?: string | null;
    title?: string | null;
    installmentId?: number | null;
    installment?: Installment;
    tenancyId?: number | null;
    tenancy?: Tenancy;
};

