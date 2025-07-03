"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UpdateByQueryRethrottleApi;
const acceptedParams = {
    update_by_query_rethrottle: {
        path: [
            'task_id'
        ],
        body: [],
        query: [
            'requests_per_second'
        ]
    }
};
async function UpdateByQueryRethrottleApi(params, options) {
    const { path: acceptedPath } = acceptedParams.update_by_query_rethrottle;
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
    const method = 'POST';
    const path = `/_update_by_query/${encodeURIComponent(params.task_id.toString())}/_rethrottle`;
    const meta = {
        name: 'update_by_query_rethrottle',
        pathParts: {
            task_id: params.task_id
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=update_by_query_rethrottle.js.map