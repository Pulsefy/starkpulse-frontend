"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PutScriptApi;
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
const acceptedParams = {
    put_script: {
        path: [
            'id',
            'context'
        ],
        body: [
            'script'
        ],
        query: [
            'context',
            'master_timeout',
            'timeout'
        ]
    }
};
async function PutScriptApi(params, options) {
    const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = acceptedParams.put_script;
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
    if (params.id != null && params.context != null) {
        method = 'PUT';
        path = `/_scripts/${encodeURIComponent(params.id.toString())}/${encodeURIComponent(params.context.toString())}`;
    }
    else {
        method = 'PUT';
        path = `/_scripts/${encodeURIComponent(params.id.toString())}`;
    }
    const meta = {
        name: 'put_script',
        pathParts: {
            id: params.id,
            context: params.context
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=put_script.js.map