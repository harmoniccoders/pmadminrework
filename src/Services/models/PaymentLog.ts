/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Card } from './Card';

export type PaymentLog = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    flutterWavePaymentId?: number;
    transactionReference?: string | null;
    flutterWaveReference?: string | null;
    deviceFingerPrint?: string | null;
    amount?: string | null;
    currency?: string | null;
    chargedAmount?: string | null;
    appFee?: string | null;
    merchantFee?: string | null;
    processorResponse?: string | null;
    authModel?: string | null;
    ip?: string | null;
    narration?: string | null;
    status?: string | null;
    paymentType?: string | null;
    accountId?: number;
    amountSettled?: number;
    createdAt?: string;
    cardId?: number;
    card?: Card;
};

