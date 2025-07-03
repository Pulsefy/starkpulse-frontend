"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteApi;
const acceptedParams = {
    delete: {
        path: [
            'id',
            'index'
        ],
        body: [],
        query: [
            'if_primary_term',
            'if_seq_no',
            'refresh',
            'routing',
            'timeout',
            'version',
            'version_type',
            'wait_for_active_shards'
        ]
    }
};
async function DeleteApi(params, options) {
    const { path: acceptedPath } = acceptedParams.delete;
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
        if (acceptedPath.includes(key)) {
            continue;
        }
        else if (key !== 'body' && key !== 'querystring') {
            // @ts-expect-error
            querystring[key] = params[key];
        }
    }
    const method = 'DELETE';
    const path = `/${encodeURIComponent(params.index.toString())}/_doc/${encodeURIComponent(params.id.toString())}`;
    const meta = {
        name: 'delete',
        pathParts: {
            id: params.id,
            index: params.index
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=delete.js.map