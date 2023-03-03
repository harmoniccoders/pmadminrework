/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InspectionTimeModel } from './InspectionTimeModel';

export type InspectionDateModel = {
    propertyId?: number;
    date?: string;
    times?: Array<InspectionTimeModel> | null;
};

