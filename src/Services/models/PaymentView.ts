/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Property } from './Property';
import type { Transaction } from './Transaction';
import type { User } from './User';

export type PaymentView = {
    status?: string | null;
    property?: Property;
    user?: User;
    transaction?: Transaction;
    isRelief?: boolean;
};

