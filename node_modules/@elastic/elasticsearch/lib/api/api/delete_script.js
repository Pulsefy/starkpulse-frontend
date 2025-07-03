"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteScriptApi;
const acceptedParams = {
    delete_script: {
        path: [
            'id'
        ],
        body: [],
        query: [
            'master_timeout',
            'timeout'
        ]
    }
};
async function DeleteScriptApi(params, options) {
    const { path: acceptedPath } = acceptedParams.delete_script;
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
    const path = `/_scripts/${encodeURIComponent(params.id.toString())}`;
    const meta = {
        name: 'delete_script',
        pathParts: {
            id: params.id
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=delete_script.js.map