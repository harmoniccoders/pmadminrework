/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComplaintsCategoryIEnumerableStandardResponse } from '../models/ComplaintsCategoryIEnumerableStandardResponse';
import type { ComplaintsCategoryStandardResponse } from '../models/ComplaintsCategoryStandardResponse';
import type { ComplaintsModel } from '../models/ComplaintsModel';
import type { ComplaintsSubCategory } from '../models/ComplaintsSubCategory';
import type { ComplaintsSubCategoryStandardResponse } from '../models/ComplaintsSubCategoryStandardResponse';
import type { ComplaintsViewIEnumerableStandardResponse } from '../models/ComplaintsViewIEnumerableStandardResponse';
import type { ComplaintsViewPagedCollectionStandardResponse } from '../models/ComplaintsViewPagedCollectionStandardResponse';
import type { ComplaintsViewStandardResponse } from '../models/ComplaintsViewStandardResponse';
import type { NameModel } from '../models/NameModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ComplaintsService {

    /**
     * @param requestBody
     * @returns ComplaintsViewStandardResponse Success
     * @throws ApiError
     */
    public static createComplaints(
        requestBody?: ComplaintsModel,
    ): CancelablePromise<ComplaintsViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Complaints/create',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param offset
     * @param limit
     * @returns ComplaintsViewIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listMyComplaints(
        offset?: number | null,
        limit?: number | null,
    ): CancelablePromise<ComplaintsViewIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Complaints/list',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param propertyId
     * @param offset
     * @param limit
     * @returns ComplaintsViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listComplaints(
        propertyId: number,
        offset?: number | null,
        limit?: number | null,
    ): CancelablePromise<ComplaintsViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Complaints/property/{propertyId}/list',
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
     * @param complaintsId
     * @returns ComplaintsViewStandardResponse Success
     * @throws ApiError
     */
    public static authorizeComplaints(
        complaintsId: number,
    ): CancelablePromise<ComplaintsViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Complaints/authorize/{complaintsId}',
            path: {
                'complaintsId': complaintsId,
            },
        });
    }

    /**
     * @param requestBody
     * @returns ComplaintsCategoryStandardResponse Success
     * @throws ApiError
     */
    public static createCategory(
        requestBody?: NameModel,
    ): CancelablePromise<ComplaintsCategoryStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Complaints/categories/create',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody
     * @returns ComplaintsSubCategoryStandardResponse Success
     * @throws ApiError
     */
    public static createSubcategory(
        requestBody?: ComplaintsSubCategory,
    ): CancelablePromise<ComplaintsSubCategoryStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Complaints/subcategory/create',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns ComplaintsCategoryIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listCategories(): CancelablePromise<ComplaintsCategoryIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Complaints/categories/list',
        });
    }

}
