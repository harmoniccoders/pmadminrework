/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LandSearchModel } from '../models/LandSearchModel';
import type { LandSearchViewPagedCollectionStandardResponse } from '../models/LandSearchViewPagedCollectionStandardResponse';
import type { LandSearchViewStandardResponse } from '../models/LandSearchViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LandSearchService {

    /**
     * @param requestBody 
     * @returns LandSearchViewStandardResponse Success
     * @throws ApiError
     */
    public static createRequest(
requestBody?: LandSearchModel,
): CancelablePromise<LandSearchViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/LandSearch/create',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns LandSearchViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listMyLandRequests(
offset?: number | null,
limit?: number | null,
): CancelablePromise<LandSearchViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/LandSearch/user/list',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

}
