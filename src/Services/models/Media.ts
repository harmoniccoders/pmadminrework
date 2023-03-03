/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Property } from './Property';
import type { Tenancy } from './Tenancy';

export type Media = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    name: string;
    extention: string;
    url: string;
    base64String?: string | null;
    propertyId?: number | null;
    tenancyId?: number | null;
    tenancy?: Tenancy;
    isImage?: boolean;
    isVideo?: boolean;
    isDocument?: boolean;
    property?: Property;
};

