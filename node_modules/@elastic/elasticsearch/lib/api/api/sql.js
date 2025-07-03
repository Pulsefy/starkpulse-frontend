"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Sql {
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
            'sql.clear_cursor': {
                path: [],
                body: [
                    'cursor'
                ],
                query: []
            },
            'sql.delete_async': {
                path: [
                    'id'
                ],
                body: [],
                query: []
            },
            'sql.get_async': {
                path: [
                    'id'
                ],
                body: [],
                query: [
                    'delimiter',
                    'format',
                    'keep_alive',
                    'wait_for_completion_timeout'
                ]
            },
            'sql.get_async_status': {
                path: [
                    'id'
                ],
                body: [],
                query: []
            },
            'sql.query': {
                path: [],
                body: [
                    'allow_partial_search_results',
                    'catalog',
                    'columnar',
                    'cursor',
                    'fetch_size',
                    'field_multi_value_leniency',
                    'filter',
                    'index_using_frozen',
                    'keep_alive',
                    'keep_on_completion',
                    'page_timeout',
                    'params',
                    'query',
                    'request_timeout',
                    'runtime_mappings',
                    'time_zone',
                    'wait_for_completion_timeout'
                ],
                query: [
                    'format'
                ]
            },
            'sql.translate': {
                path: [],
                body: [
                    'fetch_size',
                    'filter',
                    'query',
                    'time_zone'
                ],
                query: []
            }
        };
    }
    async clearCursor(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['sql.clear_cursor'];
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
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
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
        const method = 'POST';
        const path = '/_sql/close';
        const meta = {
            name: 'sql.clear_cursor'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteAsync(params, options) {
        const { path: acceptedPath } = this.acceptedParams['sql.delete_async'];
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
        const path = `/_sql/async/delete/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'sql.delete_async',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getAsync(params, options) {
        const { path: acceptedPath } = this.acceptedParams['sql.get_async'];
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
        const path = `/_sql/async/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'sql.get_async',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getAsyncStatus(params, options) {
        const { path: acceptedPath } = this.acceptedParams['sql.get_async_status'];
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
        const path = `/_sql/async/status/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'sql.get_async_status',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async query(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['sql.query'];
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
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
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
        const method = body != null ? 'POST' : 'GET';
        const path = '/_sql';
        const meta = {
            name: 'sql.query'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async translate(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['sql.translate'];
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
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
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
        const method = body != null ? 'POST' : 'GET';
        const path = '/_sql/translate';
        const meta = {
            name: 'sql.translate'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Sql;
//# sourceMappingURL=sql.js.map