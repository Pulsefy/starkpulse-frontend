"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MsearchTemplateApi;
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
const acceptedParams = {
    msearch_template: {
        path: [
            'index'
        ],
        body: [
            'search_templates'
        ],
        query: [
            'ccs_minimize_roundtrips',
            'max_concurrent_searches',
            'search_type',
            'rest_total_hits_as_int',
            'typed_keys'
        ]
    }
};
async function MsearchTemplateApi(params, options) {
    var _a;
    const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = acceptedParams.msearch_template;
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
        path = `/${encodeURIComponent(params.index.toString())}/_msearch/template`;
    }
    else {
        method = body != null ? 'POST' : 'GET';
        path = '/_msearch/template';
    }
    const meta = {
        name: 'msearch_template',
        pathParts: {
            index: params.index
        }
    };
    return await this.transport.request({ path, method, querystring, bulkBody: body, meta }, options);
}
//# sourceMappingURL=msearch_template.js.map