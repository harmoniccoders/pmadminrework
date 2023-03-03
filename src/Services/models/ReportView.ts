/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Property } from './Property';
import type { User } from './User';

export type ReportView = {
    id?: number;
    property?: Property;
    user?: User;
    description?: string | null;
    usersName?: string | null;
    dateCreated?: string;
    email?: string | null;
};

