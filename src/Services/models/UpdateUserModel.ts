/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MediaModel } from './MediaModel';

export type UpdateUserModel = {
    id?: number;
    phoneNumber?: string | null;
    profilePicture?: MediaModel;
};

