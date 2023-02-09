/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationType } from './ApplicationType';
import type { NextOfKin } from './NextOfKin';
import type { Property } from './Property';
import type { Status } from './Status';
import type { User } from './User';

export type Application = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    userId?: number;
    user?: User;
    propertyId?: number | null;
    property?: Property;
    nextOfKinId?: number;
    nextOfKin?: NextOfKin;
    applicationTypeId?: number;
    applicationType?: ApplicationType;
    statusId?: number;
    status?: Status;
    reliefAmount?: number;
    payBackDate?: string;
    repaymentFrequency?: string | null;
};
