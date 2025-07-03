"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Xpack {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "acceptedParams", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
        this.acceptedParams = {
            'xpack.info': {
                path: [],
                body: [],
                query: [
                    'categories',
                    'accept_enterprise',
                    'human'
                ]
            },
            'xpack.usage': {
                path: [],
                body: [],
                query: [
                    'master_timeout'
                ]
            }
        };
    }
    async info(params, options) {
        const { path: acceptedPath } = this.acceptedParams['xpack.info'];
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
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_xpack';
        const meta = {
            name: 'xpack.info'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async usage(params, options) {
        const { path: acceptedPath } = this.acceptedParams['xpack.usage'];
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
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_xpack/usage';
        const meta = {
            name: 'xpack.usage'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Xpack;
//# sourceMappingURL=xpack.js.map