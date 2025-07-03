"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class AsyncSearch {
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
            'async_search.delete': {
                path: [
                    'id'
                ],
                body: [],
                query: []
            },
            'async_search.get': {
                path: [
                    'id'
                ],
                body: [],
                query: [
                    'keep_alive',
                    'typed_keys',
                    'wait_for_completion_timeout'
                ]
            },
            'async_search.status': {
                path: [
                    'id'
                ],
                body: [],
                query: [
                    'keep_alive'
                ]
            },
            'async_search.submit': {
                path: [
                    'index'
                ],
                body: [
                    'aggregations',
                    'aggs',
                    'collapse',
                    'explain',
                    'ext',
                    'from',
                    'highlight',
                    'track_total_hits',
                    'indices_boost',
                    'docvalue_fields',
                    'knn',
                    'min_score',
                    'post_filter',
                    'profile',
                    'query',
                    'rescore',
                    'script_fields',
                    'search_after',
                    'size',
                    'slice',
                    'sort',
                    '_source',
                    'fields',
                    'suggest',
                    'terminate_after',
                    'timeout',
                    'track_scores',
                    'version',
                    'seq_no_primary_term',
                    'stored_fields',
                    'pit',
                    'runtime_mappings',
                    'stats'
                ],
                query: [
                    'wait_for_completion_timeout',
                    'keep_alive',
                    'keep_on_completion',
                    'allow_no_indices',
                    'allow_partial_search_results',
                    'analyzer',
                    'analyze_wildcard',
                    'batched_reduce_size',
                    'ccs_minimize_roundtrips',
                    'default_operator',
                    'df',
                    'docvalue_fields',
                    'expand_wildcards',
                    'explain',
                    'ignore_throttled',
                    'ignore_unavailable',
                    'lenient',
                    'max_concurrent_shard_requests',
                    'preference',
                    'request_cache',
                    'routing',
                    'search_type',
                    'stats',
                    'stored_fields',
                    'suggest_field',
                    'suggest_mode',
                    'suggest_size',
                    'suggest_text',
                    'terminate_after',
                    'timeout',
                    'track_total_hits',
                    'track_scores',
                    'typed_keys',
                    'rest_total_hits_as_int',
                    'version',
                    '_source',
                    '_source_excludes',
                    '_source_includes',
                    'seq_no_primary_term',
                    'q',
                    'size',
                    'from',
                    'sort'
                ]
            }
        };
    }
    async delete(params, options) {
        const { path: acceptedPath } = this.acceptedParams['async_search.delete'];
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
        const path = `/_async_search/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'async_search.delete',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async get(params, options) {
        const { path: acceptedPath } = this.acceptedParams['async_search.get'];
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
        const path = `/_async_search/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'async_search.get',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async status(params, options) {
        const { path: acceptedPath } = this.acceptedParams['async_search.status'];
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
        const path = `/_async_search/status/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'async_search.status',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async submit(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['async_search.submit'];
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
                if (key === 'sort' && typeof params[key] === 'string' && params[key].includes(':')) { // eslint-disable-line
                    querystring[key] = params[key];
                }
                else {
                    // @ts-expect-error
                    body[key] = params[key];
                }
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
        let method = '';
        let path = '';
        if (params.index != null) {
            method = 'POST';
            path = `/${encodeURIComponent(params.index.toString())}/_async_search`;
        }
        else {
            method = 'POST';
            path = '/_async_search';
        }
        const meta = {
            name: 'async_search.submit',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = AsyncSearch;
//# sourceMappingURL=async_search.js.map