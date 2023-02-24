/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Inspections } from './Inspections';
import type { Media } from './Media';
import type { PropertyType } from './PropertyType';
import type { RentCollectionType } from './RentCollectionType';
import type { Report } from './Report';
import type { Status } from './Status';
import type { TenantType } from './TenantType';
import type { User } from './User';
import type { UserEnquiry } from './UserEnquiry';

export type Property = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    name: string;
    title: string;
    address: string;
    description: string;
    state: string;
    lga: string;
    sellMyself?: boolean;
    price?: number;
    readonly formattedPrice?: string | null;
    numberOfBedrooms?: number;
    numberOfBathrooms?: number;
    isDraft?: boolean;
    isActive?: boolean;
    isForRent?: boolean;
    isForSale?: boolean;
    area?: string | null;
    verified?: boolean;
    representativeId?: number | null;
    representative?: User;
    propertyTypeId?: number;
    propertyType?: PropertyType;
    createdByUserId?: number;
    createdByUser?: User;
    mediaFiles?: Array<Media> | null;
    isRequest?: boolean;
    statusId?: number | null;
    status?: Status;
    reports?: Array<Report> | null;
    views?: number;
    enquiries?: number;
    longitude?: number;
    latitude?: number;
    rejectionReason?: string | null;
    userEnquiries?: Array<UserEnquiry> | null;
    tenantTypeId?: number | null;
    tenantType?: TenantType;
    rentCollectionType?: RentCollectionType;
    rentCollectionTypeId?: number | null;
    inspections?: Array<Inspections> | null;
    documentUrl?: string | null;
};

