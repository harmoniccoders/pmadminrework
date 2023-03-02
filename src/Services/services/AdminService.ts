/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationViewPagedCollectionStandardResponse } from '../models/ApplicationViewPagedCollectionStandardResponse';
import type { CleaningQuoteModel } from '../models/CleaningQuoteModel';
import type { CleaningQuoteViewStandardResponse } from '../models/CleaningQuoteViewStandardResponse';
import type { CleaningView } from '../models/CleaningView';
import type { CleaningViewPagedCollection } from '../models/CleaningViewPagedCollection';
import type { LoginModel } from '../models/LoginModel';
import type { MetricsViewStandardResponse } from '../models/MetricsViewStandardResponse';
import type { PropertyModel } from '../models/PropertyModel';
import type { PropertyRequestViewPagedCollectionStandardResponse } from '../models/PropertyRequestViewPagedCollectionStandardResponse';
import type { PropertyRequestViewStandardResponse } from '../models/PropertyRequestViewStandardResponse';
import type { PropertyViewStandardResponse } from '../models/PropertyViewStandardResponse';
import type { Register } from '../models/Register';
import type { TenancyViewPagedCollectionStandardResponse } from '../models/TenancyViewPagedCollectionStandardResponse';
import type { TransactionPagedCollectionStandardResponse } from '../models/TransactionPagedCollectionStandardResponse';
import type { UserEnquiryViewPagedCollectionStandardResponse } from '../models/UserEnquiryViewPagedCollectionStandardResponse';
import type { UserEnquiryViewStandardResponse } from '../models/UserEnquiryViewStandardResponse';
import type { UserViewPagedCollectionStandardResponse } from '../models/UserViewPagedCollectionStandardResponse';
import type { UserViewStandardResponse } from '../models/UserViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdminService {

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static authenticate(
requestBody?: LoginModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Admin/token',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static create(
requestBody?: Register,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Admin/create',
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
    public static listAdmins(
        bearer: string,
offset?: number | null,
limit?: number | null,
search?: string | null,
): CancelablePromise<UserViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/list',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
            headers:{
                Authorization: bearer
            }
        });
    }

    /**
     * @param userId 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static getUser(
userId: number,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/user/{userId}',
            path: {
                'userId': userId,
            },
        });
    }

    /**
     * @returns MetricsViewStandardResponse Success
     * @throws ApiError
     */
    public static metrics(): CancelablePromise<MetricsViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/metrics',
        });
    }

    /**
     * @param email 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static deleteUser(
email: string | null,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/delete/{email}',
            path: {
                'email': email,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static createNewProperty(
requestBody?: PropertyModel,
): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Admin/property/create',
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
    public static listAllRequests(
offset?: number | null,
limit?: number | null,
): CancelablePromise<PropertyRequestViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/requests/list',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param id 
     * @returns PropertyRequestViewStandardResponse Success
     * @throws ApiError
     */
    public static getRequest(
id: number,
): CancelablePromise<PropertyRequestViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/requests/get/{Id}',
            path: {
                'Id': id,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @param filter 
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static listProperties(
offset?: number | null,
limit?: number | null,
search?: string | null,
filter?: string | null,
): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/properties/list',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
                'filter': filter,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static listPropertiesForRentPending(
offset?: number | null,
limit?: number | null,
search?: string | null,
): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/properties/list/rent/pending',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @param filter 
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static listPropertiesRentApproved(
offset?: number | null,
limit?: number | null,
search?: string | null,
filter?: string | null,
): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/properties/list/rent',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
                'filter': filter,
            },
        });
    }

    /**
     * @param propertyId 
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static approveProperty(
propertyId: number,
): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/property/approve/{propertyId}',
            path: {
                'propertyId': propertyId,
            },
        });
    }

    /**
     * @param propertyId 
     * @param reason 
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static rejectProperty(
propertyId: number,
reason: string | null,
): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/property/reject/{propertyId}/{reason}',
            path: {
                'propertyId': propertyId,
                'reason': reason,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns CleaningViewPagedCollection Success
     * @throws ApiError
     */
    public static listAllCleanRequests(
offset?: number | null,
limit?: number | null,
): CancelablePromise<CleaningViewPagedCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/clean/requests/list',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param id 
     * @returns CleaningView Success
     * @throws ApiError
     */
    public static getCleanRequest(
id: number,
): CancelablePromise<CleaningView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/clean/requests/get/{Id}',
            path: {
                'Id': id,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns CleaningViewPagedCollection Success
     * @throws ApiError
     */
    public static listAllLandRequests(
offset?: number | null,
limit?: number | null,
): CancelablePromise<CleaningViewPagedCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/land/requests/list',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CleaningQuoteViewStandardResponse Success
     * @throws ApiError
     */
    public static addQuoteForCleanRequest(
requestBody?: CleaningQuoteModel,
): CancelablePromise<CleaningQuoteViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Admin/clean/quote',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @returns TransactionPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listTransactions(
offset?: number | null,
limit?: number | null,
search?: string | null,
): CancelablePromise<TransactionPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/transactions/list',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns UserEnquiryViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listAllEnquiries(
offset?: number | null,
limit?: number | null,
): CancelablePromise<UserEnquiryViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/enquiries/list',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param enquiryId 
     * @returns UserEnquiryViewStandardResponse Success
     * @throws ApiError
     */
    public static getEnquiry(
enquiryId: number,
): CancelablePromise<UserEnquiryViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/enquiries/get/{enquiryId}',
            path: {
                'enquiryId': enquiryId,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns ApplicationViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listReliefApplications(
offset?: number | null,
limit?: number | null,
): CancelablePromise<ApplicationViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/applications/reliefs/pending',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns ApplicationViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listAcceptedReliefApplications(
offset?: number | null,
limit?: number | null,
): CancelablePromise<ApplicationViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/applications/reliefs/accepted',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns ApplicationViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listReviewedReliefApplications(
offset?: number | null,
limit?: number | null,
): CancelablePromise<ApplicationViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/applications/reliefs/reviewed',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns ApplicationViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listApprovedReliefApplications(
offset?: number | null,
limit?: number | null,
): CancelablePromise<ApplicationViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/applications/reliefs/approved',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns ApplicationViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listRentApplications(
offset?: number | null,
limit?: number | null,
): CancelablePromise<ApplicationViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/applications/rent',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns TenancyViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listTenancies(
offset?: number | null,
limit?: number | null,
): CancelablePromise<TenancyViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/tenancies',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

}
