/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InspectionTimeView } from './InspectionTimeView';

export type InspectionDateView = {
    id?: number;
    date?: string;
    times?: Array<InspectionTimeView> | null;
};
