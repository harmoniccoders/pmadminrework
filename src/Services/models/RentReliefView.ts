/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InstallmentView } from './InstallmentView';
import type { PropertyView } from './PropertyView';
import type { UserView } from './UserView';

export type RentReliefView = {
    id?: number;
    propertyId?: number;
    property?: PropertyView;
    user?: UserView;
    installments?: Array<InstallmentView> | null;
    status?: string | null;
    interest?: number;
    monthlyInstallment?: number;
    totalRepayment?: number;
    reliefAmount?: number;
};

