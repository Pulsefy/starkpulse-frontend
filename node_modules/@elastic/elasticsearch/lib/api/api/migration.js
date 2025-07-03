"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Migration {
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
            'migration.deprecations': {
                path: [
                    'index'
                ],
                body: [],
                query: []
            },
            'migration.get_feature_upgrade_status': {
                path: [],
                body: [],
                query: []
            },
            'migration.post_feature_upgrade': {
                path: [],
                body: [],
                query: []
            }
        };
    }
    async deprecations(params, options) {
        const { path: acceptedPath } = this.acceptedParams['migration.deprecations'];
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
        let method = '';
        let path = '';
        if (params.index != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_migration/deprecations`;
        }
        else {
            method = 'GET';
            path = '/_migration/deprecations';
        }
        const meta = {
            name: 'migration.deprecations',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getFeatureUpgradeStatus(params, options) {
        const { path: acceptedPath } = this.acceptedParams['migration.get_feature_upgrade_status'];
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
        const path = '/_migration/system_features';
        const meta = {
            name: 'migration.get_feature_upgrade_status'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async postFeatureUpgrade(params, options) {
        const { path: acceptedPath } = this.acceptedParams['migration.post_feature_upgrade'];
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
        const method = 'POST';
        const path = '/_migration/system_features';
        const meta = {
            name: 'migration.post_feature_upgrade'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Migration;
//# sourceMappingURL=migration.js.map