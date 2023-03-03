/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MediaModel } from './MediaModel';

export type PropertyModel = {
    id?: number;
    name: string;
    title: string;
    address: string;
    description: string;
    sellMyself?: boolean;
    price: number;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    isDraft?: boolean;
    isActive?: boolean;
    isForRent?: boolean;
    isForSale?: boolean;
    propertyTypeId: number;
    mediaFiles?: Array<MediaModel> | null;
    state?: string | null;
    lga?: string | null;
    area?: string | null;
    isRequest?: boolean;
    comment?: string | null;
    budget?: string | null;
    longitude?: number;
    latitude?: number;
    propertyRequestId?: number;
    tenantTypeId?: number;
    rentCollectionTypeId?: number;
    requestId?: number;
    bank?: string | null;
    accountNumber?: string | null;
    propertyRequestMatchId?: number;
    documentUrl?: string | null;
};

