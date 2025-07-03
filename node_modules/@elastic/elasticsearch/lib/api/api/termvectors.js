"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TermvectorsApi;
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
const acceptedParams = {
    termvectors: {
        path: [
            'index',
            'id'
        ],
        body: [
            'doc',
            'filter',
            'per_field_analyzer',
            'fields',
            'field_statistics',
            'offsets',
            'payloads',
            'positions',
            'term_statistics',
            'routing',
            'version',
            'version_type'
        ],
        query: [
            'fields',
            'field_statistics',
            'offsets',
            'payloads',
            'positions',
            'preference',
            'realtime',
            'routing',
            'term_statistics',
            'version',
            'version_type'
        ]
    }
};
async function TermvectorsApi(params, options) {
    const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = acceptedParams.termvectors;
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
    if (params.index != null && params.id != null) {
        method = body != null ? 'POST' : 'GET';
        path = `/${encodeURIComponent(params.index.toString())}/_termvectors/${encodeURIComponent(params.id.toString())}`;
    }
    else {
        method = body != null ? 'POST' : 'GET';
        path = `/${encodeURIComponent(params.index.toString())}/_termvectors`;
    }
    const meta = {
        name: 'termvectors',
        pathParts: {
            index: params.index,
            id: params.id
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=termvectors.js.map