"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchShardsApi;
const acceptedParams = {
    search_shards: {
        path: [
            'index'
        ],
        body: [],
        query: [
            'allow_no_indices',
            'expand_wildcards',
            'ignore_unavailable',
            'local',
            'master_timeout',
            'preference',
            'routing'
        ]
    }
};
async function SearchShardsApi(params, options) {
    const { path: acceptedPath } = acceptedParams.search_shards;
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
        method = body != null ? 'POST' : 'GET';
        path = `/${encodeURIComponent(params.index.toString())}/_search_shards`;
    }
    else {
        method = body != null ? 'POST' : 'GET';
        path = '/_search_shards';
    }
    const meta = {
        name: 'search_shards',
        pathParts: {
            index: params.index
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=search_shards.js.map