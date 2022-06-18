/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportModel } from '../models/ReportModel';
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

}
