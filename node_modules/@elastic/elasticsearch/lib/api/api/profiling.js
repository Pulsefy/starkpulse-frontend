"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Profiling {
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
            'profiling.flamegraph': {
                path: [],
                body: [],
                query: []
            },
            'profiling.stacktraces': {
                path: [],
                body: [],
                query: []
            },
            'profiling.status': {
                path: [],
                body: [],
                query: []
            },
            'profiling.topn_functions': {
                path: [],
                body: [],
                query: []
            }
        };
    }
    async flamegraph(params, options) {
        const { path: acceptedPath } = this.acceptedParams['profiling.flamegraph'];
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
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_profiling/flamegraph';
        const meta = {
            name: 'profiling.flamegraph'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stacktraces(params, options) {
        const { path: acceptedPath } = this.acceptedParams['profiling.stacktraces'];
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
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_profiling/stacktraces';
        const meta = {
            name: 'profiling.stacktraces'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async status(params, options) {
        const { path: acceptedPath } = this.acceptedParams['profiling.status'];
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
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_profiling/status';
        const meta = {
            name: 'profiling.status'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async topnFunctions(params, options) {
        const { path: acceptedPath } = this.acceptedParams['profiling.topn_functions'];
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
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_profiling/topn/functions';
        const meta = {
            name: 'profiling.topn_functions'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Profiling;
//# sourceMappingURL=profiling.js.map