/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MediaView } from './MediaView';
import type { User } from './User';
import type { UserView } from './UserView';

export type PropertyView = {
    id?: number;
    name?: string | null;
    title?: string | null;
    address?: string | null;
    description?: string | null;
    sellMyself?: boolean;
    price?: number;
    numberOfBedrooms?: number;
    numberOfBathrooms?: number;
    isDraft?: boolean;
    isActive?: boolean;
    rejectionReason?: string | null;
    isForRent?: boolean;
    isForSale?: boolean;
    area?: string | null;
    propertyType?: string | null;
    createdByUser?: UserView;
    mediaFiles?: Array<MediaView> | null;
    verified?: boolean;
    representative?: User;
    state?: string | null;
    lga?: string | null;
    isRequest?: boolean;
    status?: string | null;
    longitude?: number;
    latitude?: number;
    views?: number;
    enquiries?: number;
    dateCreated?: string;
    propertyTypeId?: number;
    documentUrl?: string | null;
};
