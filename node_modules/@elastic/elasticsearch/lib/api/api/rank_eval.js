"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RankEvalApi;
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
const acceptedParams = {
    rank_eval: {
        path: [
            'index'
        ],
        body: [
            'requests',
            'metric'
        ],
        query: [
            'allow_no_indices',
            'expand_wildcards',
            'ignore_unavailable',
            'search_type'
        ]
    }
};
async function RankEvalApi(params, options) {
    const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = acceptedParams.rank_eval;
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
    let method = '';
    let path = '';
    if (params.index != null) {
        method = body != null ? 'POST' : 'GET';
        path = `/${encodeURIComponent(params.index.toString())}/_rank_eval`;
    }
    else {
        method = body != null ? 'POST' : 'GET';
        path = '/_rank_eval';
    }
    const meta = {
        name: 'rank_eval',
        pathParts: {
            index: params.index
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=rank_eval.js.map