"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Fleet {
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
            'fleet.delete_secret': {
                path: [
                    'id'
                ],
                body: [],
                query: []
            },
            'fleet.get_secret': {
                path: [
                    'id'
                ],
                body: [],
                query: []
            },
            'fleet.global_checkpoints': {
                path: [
                    'index'
                ],
                body: [],
                query: [
                    'wait_for_advance',
                    'wait_for_index',
                    'checkpoints',
                    'timeout'
                ]
            },
            'fleet.msearch': {
                path: [
                    'index'
                ],
                body: [
                    'searches'
                ],
                query: [
                    'allow_no_indices',
                    'ccs_minimize_roundtrips',
                    'expand_wildcards',
                    'ignore_throttled',
                    'ignore_unavailable',
                    'max_concurrent_searches',
                    'max_concurrent_shard_requests',
                    'pre_filter_shard_size',
                    'search_type',
                    'rest_total_hits_as_int',
                    'typed_keys',
                    'wait_for_checkpoints',
                    'allow_partial_search_results'
                ]
            },
            'fleet.post_secret': {
                path: [],
                body: [],
                query: []
            },
            'fleet.search': {
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
                    'allow_no_indices',
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
                    'pre_filter_shard_size',
                    'request_cache',
                    'routing',
                    'scroll',
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
                    'sort',
                    'wait_for_checkpoints',
                    'allow_partial_search_results'
                ]
            }
        };
    }
    async deleteSecret(params, options) {
        const { path: acceptedPath } = this.acceptedParams['fleet.delete_secret'];
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
        const method = 'DELETE';
        const path = `/_fleet/secret/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'fleet.delete_secret',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getSecret(params, options) {
        const { path: acceptedPath } = this.acceptedParams['fleet.get_secret'];
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
        const path = `/_fleet/secret/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'fleet.get_secret',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async globalCheckpoints(params, options) {
        const { path: acceptedPath } = this.acceptedParams['fleet.global_checkpoints'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_fleet/global_checkpoints`;
        const meta = {
            name: 'fleet.global_checkpoints',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async msearch(params, options) {
        var _a;
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['fleet.msearch'];
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
        let method = '';
        let path = '';
        if (params.index != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_fleet/_fleet_msearch`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_fleet/_fleet_msearch';
        }
        const meta = {
            name: 'fleet.msearch',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, bulkBody: body, meta }, options);
    }
    async postSecret(params, options) {
        const { path: acceptedPath } = this.acceptedParams['fleet.post_secret'];
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
        const path = '/_fleet/secret';
        const meta = {
            name: 'fleet.post_secret'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async search(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['fleet.search'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_fleet/_fleet_search`;
        const meta = {
            name: 'fleet.search',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Fleet;
//# sourceMappingURL=fleet.js.map