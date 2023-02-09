/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequestViewPagedCollectionStandardResponse } from '../models/RequestViewPagedCollectionStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RequestService {

    /**
     * @param offset 
     * @param limit 
     * @returns RequestViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listRequests(
offset?: number | null,
limit?: number | null,
): CancelablePromise<RequestViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Request/list',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns RequestViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listPendingRequests(
offset?: number | null,
limit?: number | null,
): CancelablePromise<RequestViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Request/list/pending',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns RequestViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listOngoingRequests(
offset?: number | null,
limit?: number | null,
): CancelablePromise<RequestViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Request/list/ongoing',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns RequestViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listResolvedRequests(
offset?: number | null,
limit?: number | null,
): CancelablePromise<RequestViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Request/list/resolved',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

}
