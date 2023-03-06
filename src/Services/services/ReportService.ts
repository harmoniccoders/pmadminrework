/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportModel } from '../models/ReportModel';
import type { ReportViewPagedCollectionStandardResponse } from '../models/ReportViewPagedCollectionStandardResponse';
import type { ReportViewStandardResponse } from '../models/ReportViewStandardResponse';
import type { StringStandardResponse } from '../models/StringStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportService {

    /**
     * @param requestBody 
     * @returns StringStandardResponse Success
     * @throws ApiError
     */
    public static createReport(
requestBody?: ReportModel,
): CancelablePromise<StringStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Report/create',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns ReportViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static getReports(
offset?: number | null,
limit?: number | null,
): CancelablePromise<ReportViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Report/list',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param id 
     * @returns ReportViewStandardResponse Success
     * @throws ApiError
     */
    public static getReportById(
id: number,
): CancelablePromise<ReportViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Report/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns StringStandardResponse Success
     * @throws ApiError
     */
    public static contactUs(
requestBody?: ReportModel,
): CancelablePromise<StringStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Report/contact',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
