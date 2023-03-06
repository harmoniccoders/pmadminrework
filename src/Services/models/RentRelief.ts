/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Installment } from './Installment';
import type { Property } from './Property';
import type { User } from './User';

export type RentRelief = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    propertyId?: number;
    property?: Property;
    userId?: number;
    user?: User;
    installments?: Array<Installment> | null;
};
