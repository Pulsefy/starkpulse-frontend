"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ExplainApi;
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
const acceptedParams = {
    explain: {
        path: [
            'id',
            'index'
        ],
        body: [
            'query'
        ],
        query: [
            'analyzer',
            'analyze_wildcard',
            'default_operator',
            'df',
            'lenient',
            'preference',
            'routing',
            '_source',
            '_source_excludes',
            '_source_includes',
            'stored_fields',
            'q'
        ]
    }
};
async function ExplainApi(params, options) {
    const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = acceptedParams.explain;
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
    const path = `/${encodeURIComponent(params.index.toString())}/_explain/${encodeURIComponent(params.id.toString())}`;
    const meta = {
        name: 'explain',
        pathParts: {
            id: params.id,
            index: params.index
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=explain.js.map