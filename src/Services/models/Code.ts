/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type Code = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    codeString: string;
    key?: string | null;
    userId?: number | null;
    user?: User;
    expiryDate?: string;
    isExpired?: boolean;
    token?: string | null;
};

