/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyRequest } from './PropertyRequest';
import type { PropertyView } from './PropertyView';

export type PropertyRequestMatchView = {
    id?: number;
    property?: PropertyView;
    propertyRequest?: PropertyRequest;
    status?: string | null;
};

