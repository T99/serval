/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:18 PM -- August 28th, 2023
 * Project: serval
 */

import { IncomingMessage } from "node:http"
import { RoutingCondition } from "./routing-condition.js";
import { HTTPMethod } from "./http-method.js";

type HTTPRoutingCondition = RoutingCondition<IncomingMessage>;

export const domainIs: (domain: string) => HTTPRoutingCondition =
	(domain: string): HTTPRoutingCondition =>
		(request: IncomingMessage): boolean =>
			request.url === domain;

export const httpMethodIs: (httpMethod: HTTPMethod) => HTTPRoutingCondition =
	(httpMethod: HTTPMethod): HTTPRoutingCondition =>
		(request: IncomingMessage): boolean =>
			request.method === httpMethod;

export const httpMethodIsNot: (httpMethod: HTTPMethod) => HTTPRoutingCondition =
	(httpMethod: HTTPMethod): HTTPRoutingCondition =>
		(request: IncomingMessage): boolean =>
			request.method !== httpMethod;

export const httpVersionIs:
	(majorVersion: number, minorVersion: number) => HTTPRoutingCondition =
		(majorVersion: number, minorVersion: number): HTTPRoutingCondition =>
			(request: IncomingMessage): boolean =>
				request.httpVersionMajor === majorVersion &&
				request.httpVersionMinor === minorVersion;

export const httpVersionIsEqualTo: typeof httpVersionIs = httpVersionIs;

export const httpVersionIsGreaterThan:
	(majorVersion: number, minorVersion: number) => HTTPRoutingCondition =
	(majorVersion: number, minorVersion: number): HTTPRoutingCondition =>
		(request: IncomingMessage): boolean =>
			request.httpVersionMajor > majorVersion || (
				request.httpVersionMajor === majorVersion &&
				request.httpVersionMinor > minorVersion
			);

export const httpVersionIsGreaterThanOrEqualTo:
	(majorVersion: number, minorVersion: number) => HTTPRoutingCondition =
	(majorVersion: number, minorVersion: number): HTTPRoutingCondition =>
		(request: IncomingMessage): boolean =>
			request.httpVersionMajor > majorVersion || (
				request.httpVersionMajor === majorVersion &&
				request.httpVersionMinor >= minorVersion
			);

export const httpVersionIsLessThan:
	(majorVersion: number, minorVersion: number) => HTTPRoutingCondition =
	(majorVersion: number, minorVersion: number): HTTPRoutingCondition =>
		(request: IncomingMessage): boolean =>
			request.httpVersionMajor < majorVersion || (
				request.httpVersionMajor === majorVersion &&
				request.httpVersionMinor < minorVersion
			);

export const httpVersionIsLessThanOrEqualTo:
	(majorVersion: number, minorVersion: number) => HTTPRoutingCondition =
	(majorVersion: number, minorVersion: number): HTTPRoutingCondition =>
		(request: IncomingMessage): boolean =>
			request.httpVersionMajor < majorVersion || (
				request.httpVersionMajor === majorVersion &&
				request.httpVersionMinor <= minorVersion
			);
