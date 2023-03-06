/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Inspections } from './Inspections';
import type { InspectionTime } from './InspectionTime';
import type { Property } from './Property';

export type InspectionDate = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    propertyId?: number;
    property?: Property;
    date?: string;
    times?: Array<InspectionTime> | null;
    inspections?: Array<Inspections> | null;
};
