/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginModel } from '../models/LoginModel';
import type { PasswordReset } from '../models/PasswordReset';
import type { PasswordResetModel } from '../models/PasswordResetModel';
import type { Register } from '../models/Register';
import type { UpdateUserModel } from '../models/UpdateUserModel';
import type { UserEnquiryPagedCollectionStandardResponse } from '../models/UserEnquiryPagedCollectionStandardResponse';
import type { UserViewPagedCollectionStandardResponse } from '../models/UserViewPagedCollectionStandardResponse';
import type { UserViewStandardResponse } from '../models/UserViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static register(
requestBody?: Register,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/register',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static login(
requestBody?: LoginModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/token',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param email 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static resendVerificationMail(
email: string | null,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/reverify/{email}',
            path: {
                'email': email,
            },
        });
    }

    /**
     * @param token 
     * @param email 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static verify(
token: string | null,
email: string | null,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/verifyUser/{token}/{email}',
            path: {
                'token': token,
                'email': email,
            },
        });
    }

    /**
     * @param email 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static delete(
email: string | null,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/delete/{email}',
            path: {
                'email': email,
            },
        });
    }

    /**
     * @param email 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static initiateReset(
email: string | null,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/reset/initiate/{email}',
            path: {
                'email': email,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static completeReset(
requestBody?: PasswordReset,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/reset/complete',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @returns UserViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listUsers(
offset?: number | null,
limit?: number | null,
search?: string | null,
): CancelablePromise<UserViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/list',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
        });
    }

    /**
     * @param propertyId 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static addEnquiry(
propertyId: number,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/enquire/{PropertyId}',
            path: {
                'PropertyId': propertyId,
            },
        });
    }

    /**
     * @param propertyId 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static cancelUserEnquiry(
propertyId: number,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/enquire/cancel/{PropertyId}',
            path: {
                'PropertyId': propertyId,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns UserEnquiryPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listMyEnquiries(
offset?: number | null,
limit?: number | null,
): CancelablePromise<UserEnquiryPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/enquiries/user',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static updateUser(
requestBody?: UpdateUserModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/User/update',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static updatePassword(
requestBody?: PasswordResetModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/password/update',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
