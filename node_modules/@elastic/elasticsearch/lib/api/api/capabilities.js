"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CapabilitiesApi;
const acceptedParams = {
    capabilities: {
        path: [],
        body: [],
        query: []
    }
};
async function CapabilitiesApi(params, options) {
    const { path: acceptedPath } = acceptedParams.capabilities;
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
    params = params !== null && params !== void 0 ? params : {};
    for (const key in params) {
        if (acceptedPath.includes(key)) {
            continue;
        }
        else if (key !== 'body' && key !== 'querystring') {
            querystring[key] = params[key];
        }
    }
    const method = 'GET';
    const path = '/_capabilities';
    const meta = {
        name: 'capabilities'
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=capabilities.js.map