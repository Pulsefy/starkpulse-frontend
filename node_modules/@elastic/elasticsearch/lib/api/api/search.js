"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchApi;
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
const acceptedParams = {
    search: {
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
            'rank',
            'min_score',
            'post_filter',
            'profile',
            'query',
            'rescore',
            'retriever',
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
            'include_named_queries_score',
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
            'force_synthetic_source'
        ]
    }
};
async function SearchApi(params, options) {
    const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = acceptedParams.search;
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
        method = body != null ? 'POST' : 'GET';
        path = `/${encodeURIComponent(params.index.toString())}/_search`;
    }
    else {
        method = body != null ? 'POST' : 'GET';
        path = '/_search';
    }
    const meta = {
        name: 'search',
        pathParts: {
            index: params.index
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=search.js.map