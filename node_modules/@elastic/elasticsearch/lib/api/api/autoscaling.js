"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Autoscaling {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "acceptedParams", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
        this.acceptedParams = {
            'autoscaling.delete_autoscaling_policy': {
                path: [
                    'name'
                ],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'autoscaling.get_autoscaling_capacity': {
                path: [],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'autoscaling.get_autoscaling_policy': {
                path: [
                    'name'
                ],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'autoscaling.put_autoscaling_policy': {
                path: [
                    'name'
                ],
                body: [
                    'policy'
                ],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            }
        };
    }
    async deleteAutoscalingPolicy(params, options) {
        const { path: acceptedPath } = this.acceptedParams['autoscaling.delete_autoscaling_policy'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_autoscaling/policy/${encodeURIComponent(params.name.toString())}`;
        const meta = {
            name: 'autoscaling.delete_autoscaling_policy',
            pathParts: {
                name: params.name
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getAutoscalingCapacity(params, options) {
        const { path: acceptedPath } = this.acceptedParams['autoscaling.get_autoscaling_capacity'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_autoscaling/capacity';
        const meta = {
            name: 'autoscaling.get_autoscaling_capacity'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getAutoscalingPolicy(params, options) {
        const { path: acceptedPath } = this.acceptedParams['autoscaling.get_autoscaling_policy'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = `/_autoscaling/policy/${encodeURIComponent(params.name.toString())}`;
        const meta = {
            name: 'autoscaling.get_autoscaling_policy',
            pathParts: {
                name: params.name
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putAutoscalingPolicy(params, options) {
        var _a;
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['autoscaling.put_autoscaling_policy'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body = (_a = params.body) !== null && _a !== void 0 ? _a : undefined;
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                // @ts-expect-error
                body = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'PUT';
        const path = `/_autoscaling/policy/${encodeURIComponent(params.name.toString())}`;
        const meta = {
            name: 'autoscaling.put_autoscaling_policy',
            pathParts: {
                name: params.name
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Autoscaling;
//# sourceMappingURL=autoscaling.js.map