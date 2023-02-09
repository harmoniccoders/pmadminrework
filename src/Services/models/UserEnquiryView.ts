/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InspectionView } from './InspectionView';

export type UserEnquiryView = {
    id?: number;
    userId?: number | null;
    propertyId?: number;
    propertyName?: string | null;
    active?: boolean;
    fullName?: string | null;
    state?: string | null;
    lga?: string | null;
    area?: string | null;
    dateCreated?: string;
    inspection?: Array<InspectionView> | null;
};
