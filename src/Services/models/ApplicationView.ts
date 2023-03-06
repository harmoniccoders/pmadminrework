/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NextOfKin } from './NextOfKin';
import type { PropertyView } from './PropertyView';
import type { UserView } from './UserView';

export type ApplicationView = {
    id?: number;
    user?: UserView;
    nextOfKin?: NextOfKin;
    applicationType?: string | null;
    property?: PropertyView;
    status?: string | null;
    reliefAmount?: number;
    dateCreated?: string;
};
