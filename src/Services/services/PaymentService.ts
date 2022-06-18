/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentModel } from '../models/PaymentModel';
import type { PaymentRatesViewStandardResponse } from '../models/PaymentRatesViewStandardResponse';
import type { PaymentViewStandardResponse } from '../models/PaymentViewStandardResponse';
import type { StringStandardResponse } from '../models/StringStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaymentService {

    /**
     * @param requestBody
     * @returns StringStandardResponse Success
     * @throws ApiError
     */
    public static initiatePayment(
        requestBody?: PaymentModel,
    ): CancelablePromise<StringStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/initiate',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param reference
     * @param transactionId
     * @returns PaymentViewStandardResponse Success
     * @throws ApiError
     */
    public static getApiPaymentValidate(
        reference: string | null,
        transactionId: number,
    ): CancelablePromise<PaymentViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Payment/validate/{reference}/{transactionId}',
            path: {
                'reference': reference,
                'transactionId': transactionId,
            },
        });
    }

    /**
     * @param propertyId
     * @returns PaymentRatesViewStandardResponse Success
     * @throws ApiError
     */
    public static getRatesForProperty(
        propertyId: number,
    ): CancelablePromise<PaymentRatesViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Payment/rates/{propertyId}',
            path: {
                'propertyId': propertyId,
            },
        });
    }

}
