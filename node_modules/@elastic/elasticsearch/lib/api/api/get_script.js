"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetScriptApi;
const acceptedParams = {
    get_script: {
        path: [
            'id'
        ],
        body: [],
        query: [
            'master_timeout'
        ]
    }
};
async function GetScriptApi(params, options) {
    const { path: acceptedPath } = acceptedParams.get_script;
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
    const method = 'GET';
    const path = `/_scripts/${encodeURIComponent(params.id.toString())}`;
    const meta = {
        name: 'get_script',
        pathParts: {
            id: params.id
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=get_script.js.map