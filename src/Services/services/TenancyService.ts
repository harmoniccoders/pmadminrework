/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { StringStandardResponse } from '../models/StringStandardResponse';
import type { TenancyViewIEnumerableStandardResponse } from '../models/TenancyViewIEnumerableStandardResponse';
import type { TenancyViewStandardResponse } from '../models/TenancyViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TenancyService {

    /**
     * @returns TenancyViewIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listMyTenancies(): CancelablePromise<TenancyViewIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Tenancy/user',
        });
    }

    /**
     * @returns TenancyViewIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listMyTenants(): CancelablePromise<TenancyViewIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Tenancy/landlord',
        });
    }

    /**
     * @param tenancyId
     * @returns StringStandardResponse Success
     * @throws ApiError
     */
    public static getTenancyAgreement(
        tenancyId: number,
    ): CancelablePromise<StringStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Tenancy/agreemet/{tenancyId}',
            path: {
                'tenancyId': tenancyId,
            },
        });
    }

    /**
     * @param id
     * @returns TenancyViewStandardResponse Success
     * @throws ApiError
     */
    public static toggleRenewability(
        id: number,
    ): CancelablePromise<TenancyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Tenancy/renewable/toggle/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static updateTenancyAgreement(
        id: number,
    ): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Tenancy/agreement/update/{id}',
            path: {
                'id': id,
            },
        });
    }

}
