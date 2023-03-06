/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentLog } from './PaymentLog';
import type { PropertyView } from './PropertyView';

export type ReceiptView = {
    fullName?: string | null;
    phoneNumber?: string | null;
    email?: string | null;
    property?: PropertyView;
    paymentLog?: PaymentLog;
    paymentDate?: string;
    amount?: string | null;
};
