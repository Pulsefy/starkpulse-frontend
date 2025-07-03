"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BulkApi;
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
const acceptedParams = {
    bulk: {
        path: [
            'index'
        ],
        body: [
            'operations'
        ],
        query: [
            'include_source_on_error',
            'list_executed_pipelines',
            'pipeline',
            'refresh',
            'routing',
            '_source',
            '_source_excludes',
            '_source_includes',
            'timeout',
            'wait_for_active_shards',
            'require_alias',
            'require_data_stream'
        ]
    }
};
async function BulkApi(params, options) {
    var _a;
    const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = acceptedParams.bulk;
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
        method = 'POST';
        path = `/${encodeURIComponent(params.index.toString())}/_bulk`;
    }
    else {
        method = 'POST';
        path = '/_bulk';
    }
    const meta = {
        name: 'bulk',
        pathParts: {
            index: params.index
        }
    };
    return await this.transport.request({ path, method, querystring, bulkBody: body, meta }, options);
}
//# sourceMappingURL=bulk.js.map