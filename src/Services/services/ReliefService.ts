/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RentReliefViewIEnumerableStandardResponse } from '../models/RentReliefViewIEnumerableStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReliefService {

    /**
     * @returns RentReliefViewIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listMyRentReliefs(): CancelablePromise<RentReliefViewIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Relief/user',
        });
    }

}
