/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MediaView } from './MediaView';
import type { PropertyView } from './PropertyView';

export type UserView = {
    id?: number;
    email?: string | null;
    fullName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    companyName?: string | null;
    token?: string | null;
    phoneNumber?: string | null;
    phoneNumber1?: string | null;
    properties?: Array<PropertyView> | null;
    passportPhotograph?: MediaView;
    workId?: MediaView;
    annualIncome?: string | null;
    maritalStatus?: string | null;
    occupation?: string | null;
    nationality?: string | null;
    dateOfBirth?: string;
    address?: string | null;
    profilePicture?: string | null;
    bank?: string | null;
    accountNumber?: string | null;
};
