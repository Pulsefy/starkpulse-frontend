"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class DanglingIndices {
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
            'dangling_indices.delete_dangling_index': {
                path: [
                    'index_uuid'
                ],
                body: [],
                query: [
                    'accept_data_loss',
                    'master_timeout',
                    'timeout'
                ]
            },
            'dangling_indices.import_dangling_index': {
                path: [
                    'index_uuid'
                ],
                body: [],
                query: [
                    'accept_data_loss',
                    'master_timeout',
                    'timeout'
                ]
            },
            'dangling_indices.list_dangling_indices': {
                path: [],
                body: [],
                query: []
            }
        };
    }
    async deleteDanglingIndex(params, options) {
        const { path: acceptedPath } = this.acceptedParams['dangling_indices.delete_dangling_index'];
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
        const path = `/_dangling/${encodeURIComponent(params.index_uuid.toString())}`;
        const meta = {
            name: 'dangling_indices.delete_dangling_index',
            pathParts: {
                index_uuid: params.index_uuid
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async importDanglingIndex(params, options) {
        const { path: acceptedPath } = this.acceptedParams['dangling_indices.import_dangling_index'];
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
        const path = `/_dangling/${encodeURIComponent(params.index_uuid.toString())}`;
        const meta = {
            name: 'dangling_indices.import_dangling_index',
            pathParts: {
                index_uuid: params.index_uuid
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async listDanglingIndices(params, options) {
        const { path: acceptedPath } = this.acceptedParams['dangling_indices.list_dangling_indices'];
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
        const path = '/_dangling';
        const meta = {
            name: 'dangling_indices.list_dangling_indices'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = DanglingIndices;
//# sourceMappingURL=dangling_indices.js.map