/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:35 PM -- August 28th, 2023
 * Project: serval
 */

type UppercaseHTTPMethods =
	| "GET"
	| "POST"
	| "PUT"
	| "DELETE"
	| "HEAD"
	| "OPTIONS"
	| "CONNECT"
	| "TRACE"
	| "PATCH";

type LowercaseHTTPMethods = Lowercase<UppercaseHTTPMethods>;

export type HTTPMethod = UppercaseHTTPMethods | LowercaseHTTPMethods | string;
