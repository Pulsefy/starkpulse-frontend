"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class SearchableSnapshots {
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
            'searchable_snapshots.cache_stats': {
                path: [
                    'node_id'
                ],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'searchable_snapshots.clear_cache': {
                path: [
                    'index'
                ],
                body: [],
                query: [
                    'expand_wildcards',
                    'allow_no_indices',
                    'ignore_unavailable'
                ]
            },
            'searchable_snapshots.mount': {
                path: [
                    'repository',
                    'snapshot'
                ],
                body: [
                    'index',
                    'renamed_index',
                    'index_settings',
                    'ignore_index_settings'
                ],
                query: [
                    'master_timeout',
                    'wait_for_completion',
                    'storage'
                ]
            },
            'searchable_snapshots.stats': {
                path: [
                    'index'
                ],
                body: [],
                query: [
                    'level'
                ]
            }
        };
    }
    async cacheStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['searchable_snapshots.cache_stats'];
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
        let method = '';
        let path = '';
        if (params.node_id != null) {
            method = 'GET';
            path = `/_searchable_snapshots/${encodeURIComponent(params.node_id.toString())}/cache/stats`;
        }
        else {
            method = 'GET';
            path = '/_searchable_snapshots/cache/stats';
        }
        const meta = {
            name: 'searchable_snapshots.cache_stats',
            pathParts: {
                node_id: params.node_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async clearCache(params, options) {
        const { path: acceptedPath } = this.acceptedParams['searchable_snapshots.clear_cache'];
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
        let method = '';
        let path = '';
        if (params.index != null) {
            method = 'POST';
            path = `/${encodeURIComponent(params.index.toString())}/_searchable_snapshots/cache/clear`;
        }
        else {
            method = 'POST';
            path = '/_searchable_snapshots/cache/clear';
        }
        const meta = {
            name: 'searchable_snapshots.clear_cache',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async mount(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['searchable_snapshots.mount'];
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
        const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}/_mount`;
        const meta = {
            name: 'searchable_snapshots.mount',
            pathParts: {
                repository: params.repository,
                snapshot: params.snapshot
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['searchable_snapshots.stats'];
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
        let method = '';
        let path = '';
        if (params.index != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_searchable_snapshots/stats`;
        }
        else {
            method = 'GET';
            path = '/_searchable_snapshots/stats';
        }
        const meta = {
            name: 'searchable_snapshots.stats',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = SearchableSnapshots;
//# sourceMappingURL=searchable_snapshots.js.map