/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import Cookies from "js-cookie";
import type { ApiRequestOptions } from "./ApiRequestOptions";

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
	BASE: string;
	VERSION: string;
	WITH_CREDENTIALS: boolean;
	CREDENTIALS: "include" | "omit" | "same-origin";
	TOKEN?: string | Resolver<string>;
	USERNAME?: string | Resolver<string>;
	PASSWORD?: string | Resolver<string>;
	HEADERS?: Headers | Resolver<Headers>;
	ENCODE_PATH?: (path: string) => string;
};

const headers: Headers = {
	authorization: `Bearer ${Cookies.get("adminToken")}`,
};
export const OpenAPI: OpenAPIConfig = {
	BASE: "https://propertymataazbe.herokuapp.com",
	VERSION: "1",
	WITH_CREDENTIALS: false,
	CREDENTIALS: "include",
	TOKEN: undefined,
	USERNAME: undefined,
	PASSWORD: undefined,
	HEADERS: headers,
	ENCODE_PATH: undefined,
};
