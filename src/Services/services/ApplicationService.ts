/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationModel } from '../models/ApplicationModel';
import type { ApplicationStatusViewStandardResponse } from '../models/ApplicationStatusViewStandardResponse';
import type { ApplicationTypeIEnumerableStandardResponse } from '../models/ApplicationTypeIEnumerableStandardResponse';
import type { ApplicationViewPagedCollectionStandardResponse } from '../models/ApplicationViewPagedCollectionStandardResponse';
import type { ApplicationViewStandardResponse } from '../models/ApplicationViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApplicationService {

    /**
     * @param requestBody
     * @returns ApplicationViewStandardResponse Success
     * @throws ApiError
     */
    public static createApplication(
        requestBody?: ApplicationModel,
    ): CancelablePromise<ApplicationViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Application/new',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param propertyId
     * @param offset
     * @param limit
     * @returns ApplicationViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listActiveApplications(
        propertyId: number,
        offset?: number | null,
        limit?: number | null,
    ): CancelablePromise<ApplicationViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Application/list/{propertyId}',
            path: {
                'propertyId': propertyId,
            },
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param id
     * @returns ApplicationViewStandardResponse Success
     * @throws ApiError
     */
    public static getById(
        id: number,
    ): CancelablePromise<ApplicationViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Application/get/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns ApplicationViewStandardResponse Success
     * @throws ApiError
     */
    public static approve(
        id: number,
    ): CancelablePromise<ApplicationViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Application/approve/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns ApplicationViewStandardResponse Success
     * @throws ApiError
     */
    public static reject(
        id: number,
    ): CancelablePromise<ApplicationViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Application/reject/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns ApplicationViewStandardResponse Success
     * @throws ApiError
     */
    public static accept(
        id: number,
    ): CancelablePromise<ApplicationViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Application/accept/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns ApplicationViewStandardResponse Success
     * @throws ApiError
     */
    public static review(
        id: number,
    ): CancelablePromise<ApplicationViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Application/review/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns ApplicationTypeIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listApplicationTypes(): CancelablePromise<ApplicationTypeIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Application/types',
        });
    }

    /**
     * @param propertyId
     * @returns ApplicationStatusViewStandardResponse Success
     * @throws ApiError
     */
    public static getUserApplication(
        propertyId: number,
    ): CancelablePromise<ApplicationStatusViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Application/get/user/property/{propertyId}',
            path: {
                'propertyId': propertyId,
            },
        });
    }

}
