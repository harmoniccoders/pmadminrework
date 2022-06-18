/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Property } from './Property';
import type { Status } from './Status';
import type { Transaction } from './Transaction';
import type { User } from './User';

export type Tenancy = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    tenantId?: number;
    tenant?: User;
    ownerId?: number;
    owner?: User;
    propertyId?: number;
    property?: Property;
    transactionId?: number;
    transaction?: Transaction;
    renewable?: boolean;
    rentDueDate?: string;
    statusId?: number;
    status?: Status;
};

