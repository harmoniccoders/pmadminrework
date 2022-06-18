/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MediaView } from './MediaView';

export type LeanUserView = {
    id?: number;
    email?: string | null;
    fullName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    token?: string | null;
    phoneNumber?: string | null;
    passportPhotograph?: MediaView;
    workId?: MediaView;
    annualIncome?: string | null;
    maritalStatus?: string | null;
    occupation?: string | null;
    nationality?: string | null;
    dateOfBirth?: string;
    address?: string | null;
};

