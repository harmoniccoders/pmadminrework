/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyRequestInput } from '../models/PropertyRequestInput';
import type { PropertyRequestMatchViewStandardResponse } from '../models/PropertyRequestMatchViewStandardResponse';
import type { PropertyRequestViewPagedCollectionStandardResponse } from '../models/PropertyRequestViewPagedCollectionStandardResponse';
import type { PropertyViewStandardResponse } from '../models/PropertyViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PropertyRequestService {

    /**
     * @param requestBody
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static newRequest(
        requestBody?: PropertyRequestInput,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/PropertyRequest/new',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param offset
     * @param limit
     * @returns PropertyRequestViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listUsersRequests(
        offset?: number | null,
        limit?: number | null,
    ): CancelablePromise<PropertyRequestViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PropertyRequest/list/user',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param propertyId
     * @param requestId
     * @returns PropertyRequestMatchViewStandardResponse Success
     * @throws ApiError
     */
    public static addMatch(
        propertyId: number,
        requestId: number,
    ): CancelablePromise<PropertyRequestMatchViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PropertyRequest/match/add/{propertyId}/{requestId}',
            path: {
                'propertyId': propertyId,
                'requestId': requestId,
            },
        });
    }

    /**
     * @param matchId
     * @returns PropertyRequestMatchViewStandardResponse Success
     * @throws ApiError
     */
    public static removeMatch(
        matchId: number,
    ): CancelablePromise<PropertyRequestMatchViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PropertyRequest/match/remove/{matchId}',
            path: {
                'matchId': matchId,
            },
        });
    }

}
