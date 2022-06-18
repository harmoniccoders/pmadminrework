/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaModel } from '../models/MediaModel';
import type { MediaViewStandardResponse } from '../models/MediaViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MediaService {

    /**
     * @param requestBody
     * @returns MediaViewStandardResponse Success
     * @throws ApiError
     */
    public static upload(
        requestBody?: MediaModel,
    ): CancelablePromise<MediaViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Media/upload',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id
     * @returns MediaViewStandardResponse Success
     * @throws ApiError
     */
    public static deleteMedia(
        id: number,
    ): CancelablePromise<MediaViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Media/delete/{id}',
            path: {
                'id': id,
            },
        });
    }

}
