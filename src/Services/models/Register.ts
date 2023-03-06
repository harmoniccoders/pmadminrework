/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MediaModel } from './MediaModel';

export type Register = {
    email: string;
    password?: string | null;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    phoneNumber?: string | null;
    phoneNumber1?: string | null;
    address?: string | null;
    dateOfBirth?: string;
    nationality?: string | null;
    maritalStatus?: string | null;
    employer?: string | null;
    occupation?: string | null;
    companyName?: string | null;
    workAddress?: string | null;
    annualIncome?: string | null;
    passportPhotograph?: MediaModel;
    workId?: MediaModel;
};
