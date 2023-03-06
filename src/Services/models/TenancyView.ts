/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Property } from './Property';
import type { Transaction } from './Transaction';
import type { User } from './User';

export type TenancyView = {
    id?: number;
    tenant?: User;
    owner?: User;
    property?: Property;
    transaction?: Transaction;
    rentDueDate?: string;
    status?: string | null;
    renewable?: boolean;
    agreed?: boolean;
};
