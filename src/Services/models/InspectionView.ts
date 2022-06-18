/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InspectionDateView } from './InspectionDateView';
import type { InspectionTimeView } from './InspectionTimeView';

export type InspectionView = {
    id?: number;
    inspectionTime?: InspectionTimeView;
    inspectionDate?: InspectionDateView;
};

