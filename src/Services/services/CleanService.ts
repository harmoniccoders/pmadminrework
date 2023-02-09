/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CleaningModel } from '../models/CleaningModel';
import type { CleaningViewPagedCollection } from '../models/CleaningViewPagedCollection';
import type { CleaningViewStandardResponse } from '../models/CleaningViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CleanService {

    /**
     * @param requestBody 
     * @returns CleaningViewStandardResponse Success
     * @throws ApiError
     */
    public static createNewRequest(
requestBody?: CleaningModel,
): CancelablePromise<CleaningViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Clean/request',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns CleaningViewPagedCollection Success
     * @throws ApiError
     */
    public static listMyRequests(
offset?: number | null,
limit?: number | null,
): CancelablePromise<CleaningViewPagedCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Clean/requests/user',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param id 
     * @returns CleaningViewStandardResponse Success
     * @throws ApiError
     */
    public static acceptQuote(
id: number,
): CancelablePromise<CleaningViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Clean/quote/accept/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns CleaningViewStandardResponse Success
     * @throws ApiError
     */
    public static rejectQuote(
id: number,
): CancelablePromise<CleaningViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Clean/quote/reject/{id}',
            path: {
                'id': id,
            },
        });
    }

}
