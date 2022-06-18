/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Application } from './Application';
import type { Cleaning } from './Cleaning';
import type { Code } from './Code';
import type { Complaints } from './Complaints';
import type { Inspections } from './Inspections';
import type { Media } from './Media';
import type { Property } from './Property';
import type { RentRelief } from './RentRelief';
import type { Report } from './Report';
import type { Tenancy } from './Tenancy';
import type { Transaction } from './Transaction';
import type { UserEnquiry } from './UserEnquiry';

export type User = {
    id?: number;
    userName?: string | null;
    normalizedUserName?: string | null;
    email?: string | null;
    normalizedEmail?: string | null;
    emailConfirmed?: boolean;
    passwordHash?: string | null;
    securityStamp?: string | null;
    concurrencyStamp?: string | null;
    phoneNumber?: string | null;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: string | null;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
    firstName: string;
    lastName: string;
    password: string;
    token?: string | null;
    phoneNumber1?: string | null;
    companyName?: string | null;
    dateCreated?: string;
    dateModified?: string;
    codes?: Array<Code> | null;
    reports?: Array<Report> | null;
    applications?: Array<Application> | null;
    middleName?: string | null;
    address?: string | null;
    dateOfBirth?: string;
    nationality?: string | null;
    maritalStatus?: string | null;
    employer?: string | null;
    occupation?: string | null;
    workAddress?: string | null;
    annualIncome?: string | null;
    profilePictureId?: number | null;
    profilePicture?: Media;
    passportPhotographId?: number | null;
    passportPhotograph?: Media;
    workIdId?: number | null;
    workId?: Media;
    transactions?: Array<Transaction> | null;
    isAdmin?: boolean;
    properties?: Array<Property> | null;
    userEnquiries?: Array<UserEnquiry> | null;
    inspections?: Array<Inspections> | null;
    cleanings?: Array<Cleaning> | null;
    rentReliefs?: Array<RentRelief> | null;
    tenancies?: Array<Tenancy> | null;
    complaints?: Array<Complaints> | null;
    myTenancies?: Array<Tenancy> | null;
    bank?: string | null;
    accountNumber?: string | null;
};

