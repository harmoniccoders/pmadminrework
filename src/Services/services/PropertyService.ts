/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { InspectionDateModel } from '../models/InspectionDateModel';
import type { InspectionDateViewIEnumerableStandardResponse } from '../models/InspectionDateViewIEnumerableStandardResponse';
import type { InspectionDateViewStandardResponse } from '../models/InspectionDateViewStandardResponse';
import type { InspectionModel } from '../models/InspectionModel';
import type { InspectionTimeModel } from '../models/InspectionTimeModel';
import type { InspectionViewStandardResponse } from '../models/InspectionViewStandardResponse';
import type { PropertyModel } from '../models/PropertyModel';
import type { PropertyTitleIEnumerableStandardResponse } from '../models/PropertyTitleIEnumerableStandardResponse';
import type { PropertyViewPagedCollectionStandardResponse } from '../models/PropertyViewPagedCollectionStandardResponse';
import type { PropertyViewStandardResponse } from '../models/PropertyViewStandardResponse';
import type { RentCollectionTypeIEnumerableStandardResponse } from '../models/RentCollectionTypeIEnumerableStandardResponse';
import type { StringStandardResponse } from '../models/StringStandardResponse';
import type { TenantTypeIEnumerableStandardResponse } from '../models/TenantTypeIEnumerableStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PropertyService {

    /**
     * @param requestBody
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static createProperty(
        requestBody?: PropertyModel,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Property/create',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param offset
     * @param limit
     * @param search
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static listAllProperties(
        offset?: number | null,
        limit?: number | null,
        search?: string | null,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/list',
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
     * @param residential
     * @param commercial
     * @param mixed
     * @param bungalow
     * @param flat
     * @param duplex
     * @param terrace
     * @param bathrooms
     * @param bedrooms
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static listAllPropertiesForSale(
        offset?: number | null,
        limit?: number | null,
        search?: string | null,
        residential?: boolean | null,
        commercial?: boolean | null,
        mixed?: boolean | null,
        bungalow?: boolean | null,
        flat?: boolean | null,
        duplex?: boolean | null,
        terrace?: boolean | null,
        bathrooms?: number | null,
        bedrooms?: number | null,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/list/sales',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
                'Residential': residential,
                'Commercial': commercial,
                'Mixed': mixed,
                'Bungalow': bungalow,
                'Flat': flat,
                'Duplex': duplex,
                'Terrace': terrace,
                'Bathrooms': bathrooms,
                'Bedrooms': bedrooms,
            },
        });
    }

    /**
     * @param offset
     * @param limit
     * @param search
     * @param residential
     * @param commercial
     * @param mixed
     * @param bungalow
     * @param flat
     * @param duplex
     * @param terrace
     * @param bathrooms
     * @param bedrooms
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static listAllPropertiesForRent(
        offset?: number | null,
        limit?: number | null,
        search?: string | null,
        residential?: boolean | null,
        commercial?: boolean | null,
        mixed?: boolean | null,
        bungalow?: boolean | null,
        flat?: boolean | null,
        duplex?: boolean | null,
        terrace?: boolean | null,
        bathrooms?: number | null,
        bedrooms?: number | null,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/list/rent',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
                'Residential': residential,
                'Commercial': commercial,
                'Mixed': mixed,
                'Bungalow': bungalow,
                'Flat': flat,
                'Duplex': duplex,
                'Terrace': terrace,
                'Bathrooms': bathrooms,
                'Bedrooms': bedrooms,
            },
        });
    }

    /**
     * @param id
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static get(
        id: number,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/get/{Id}',
            path: {
                'Id': id,
            },
        });
    }

    /**
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static getAllTypes(): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/types',
        });
    }

    /**
     * @returns PropertyTitleIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listTitleTypes(): CancelablePromise<PropertyTitleIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/titles',
        });
    }

    /**
     * @param offset
     * @param limit
     * @returns PropertyViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listMyProperties(
        offset?: number | null,
        limit?: number | null,
    ): CancelablePromise<PropertyViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/user/created',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset
     * @param limit
     * @returns PropertyViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listMyPropertiesForSale(
        offset?: number | null,
        limit?: number | null,
    ): CancelablePromise<PropertyViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/user/created/sale',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset
     * @param limit
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static listMyPropertiesForRent(
        offset?: number | null,
        limit?: number | null,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/user/created/rent',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param offset
     * @param limit
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static listMyDrafts(
        offset?: number | null,
        limit?: number | null,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/user/drafts',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
        });
    }

    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static deleteProperty(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/delete/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static deActivate(
        id: number,
    ): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/deactivate/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static incrementViews(
        id: number,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/addview/{Id}',
            path: {
                'Id': id,
            },
        });
    }

    /**
     * @param id
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static incrementEnquiries(
        id: number,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/addenquiries/{Id}',
            path: {
                'Id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns InspectionDateViewStandardResponse Success
     * @throws ApiError
     */
    public static createInspectionDate(
        requestBody?: InspectionDateModel,
    ): CancelablePromise<InspectionDateViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Property/inspectiondates/create',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static deleteInspectionDate(
        id: number,
    ): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/inspectiondates/delete/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns InspectionDateViewStandardResponse Success
     * @throws ApiError
     */
    public static createInspectionTime(
        requestBody?: InspectionTimeModel,
    ): CancelablePromise<InspectionDateViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Property/inspectiontime/create',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param propertyId
     * @returns InspectionDateViewIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listInspectionDates(
        propertyId: number,
    ): CancelablePromise<InspectionDateViewIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/inspectiondates/list/{PropertyId}',
            path: {
                'PropertyId': propertyId,
            },
        });
    }

    /**
     * @param requestBody
     * @returns PropertyViewStandardResponse Success
     * @throws ApiError
     */
    public static updateProperty(
        requestBody?: PropertyModel,
    ): CancelablePromise<PropertyViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Property/update',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns TenantTypeIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listTenantTypes(): CancelablePromise<TenantTypeIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/tenants/types',
        });
    }

    /**
     * @returns RentCollectionTypeIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listRentCollectionType(): CancelablePromise<RentCollectionTypeIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/collection/types',
        });
    }

    /**
     * @param requestBody
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static scheduleInspection(
        requestBody?: InspectionModel,
    ): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Property/inspections/schedule',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param propertyId
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static cancelEnquiry(
        propertyId: number,
    ): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Property/enquiry/cancel/{propertyId}',
            path: {
                'propertyId': propertyId,
            },
        });
    }

    /**
     * @param propertyId
     * @returns InspectionViewStandardResponse Success
     * @throws ApiError
     */
    public static getInspection(
        propertyId: number,
    ): CancelablePromise<InspectionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/inspections/user/property/{propertyId}',
            path: {
                'propertyId': propertyId,
            },
        });
    }

    /**
     * @param propertyId
     * @returns StringStandardResponse Success
     * @throws ApiError
     */
    public static getReceipt(
        propertyId: number,
    ): CancelablePromise<StringStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/property/receipt/{propertyId}',
            path: {
                'PropertyId': propertyId,
            },
        });
    }

    /**
     * @param propertyId
     * @returns StringStandardResponse Success
     * @throws ApiError
     */
    public static getAgreement(
        propertyId: number,
    ): CancelablePromise<StringStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Property/property/agreement/{propertyId}',
            path: {
                'PropertyId': propertyId,
            },
        });
    }

}
