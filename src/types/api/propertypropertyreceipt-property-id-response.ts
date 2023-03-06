/* tslint:disable */
import { ReceiptViewStandardResponse } from './receipt-view-standard-response';

export type PropertypropertyreceiptPropertyIdResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? ReceiptViewStandardResponse
    : TContentType extends 'application/json'
    ? ReceiptViewStandardResponse
    : TContentType extends 'text/json'
    ? ReceiptViewStandardResponse
    : any
  : any;
