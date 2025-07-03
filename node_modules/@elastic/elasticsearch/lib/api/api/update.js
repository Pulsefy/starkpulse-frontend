"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UpdateApi;
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
const acceptedParams = {
    update: {
        path: [
            'id',
            'index'
        ],
        body: [
            'detect_noop',
            'doc',
            'doc_as_upsert',
            'script',
            'scripted_upsert',
            '_source',
            'upsert'
        ],
        query: [
            'if_primary_term',
            'if_seq_no',
            'include_source_on_error',
            'lang',
            'refresh',
            'require_alias',
            'retry_on_conflict',
            'routing',
            'timeout',
            'wait_for_active_shards',
            '_source',
            '_source_excludes',
            '_source_includes'
        ]
    }
};
async function UpdateApi(params, options) {
    const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = acceptedParams.update;
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
    const path = `/${encodeURIComponent(params.index.toString())}/_update/${encodeURIComponent(params.id.toString())}`;
    const meta = {
        name: 'update',
        pathParts: {
            id: params.id,
            index: params.index
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=update.js.map