/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InspectionDate } from './InspectionDate';
import type { InspectionTime } from './InspectionTime';
import type { Property } from './Property';
import type { User } from './User';

export type Inspections = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    inspectionDateId?: number;
    inspectionTimeId?: number;
    inspectionDate?: InspectionDate;
    inspectionTime?: InspectionTime;
    userId?: number;
    propertyId?: number;
    user?: User;
    property?: Property;
};

