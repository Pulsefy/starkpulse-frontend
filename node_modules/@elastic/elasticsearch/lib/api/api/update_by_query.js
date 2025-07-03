"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UpdateByQueryApi;
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
const acceptedParams = {
    update_by_query: {
        path: [
            'index'
        ],
        body: [
            'max_docs',
            'query',
            'script',
            'slice',
            'conflicts'
        ],
        query: [
            'allow_no_indices',
            'analyzer',
            'analyze_wildcard',
            'conflicts',
            'default_operator',
            'df',
            'expand_wildcards',
            'from',
            'ignore_unavailable',
            'lenient',
            'max_docs',
            'pipeline',
            'preference',
            'q',
            'refresh',
            'request_cache',
            'requests_per_second',
            'routing',
            'scroll',
            'scroll_size',
            'search_timeout',
            'search_type',
            'slices',
            'sort',
            'stats',
            'terminate_after',
            'timeout',
            'version',
            'version_type',
            'wait_for_active_shards',
            'wait_for_completion'
        ]
    }
};
async function UpdateByQueryApi(params, options) {
    const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = acceptedParams.update_by_query;
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
    const path = `/${encodeURIComponent(params.index.toString())}/_update_by_query`;
    const meta = {
        name: 'update_by_query',
        pathParts: {
            index: params.index
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=update_by_query.js.map