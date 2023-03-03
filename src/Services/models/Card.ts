/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Card = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    first6Digits?: string | null;
    last4Digits?: string | null;
    issuer?: string | null;
    country?: string | null;
    type?: string | null;
    token?: string | null;
    expiry?: string | null;
};

