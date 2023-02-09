/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NextOfKinModel } from './NextOfKinModel';
import type { Register } from './Register';

export type ApplicationModel = {
    register?: Register;
    nextOfKin?: NextOfKinModel;
    applicationTypeId?: number;
    propertyId?: number;
    reliefAmount?: number;
    payBackDate?: string;
    repaymentFrequency?: string | null;
};
