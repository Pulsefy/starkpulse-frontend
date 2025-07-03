"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Slm {
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
            'slm.delete_lifecycle': {
                path: [
                    'policy_id'
                ],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'slm.execute_lifecycle': {
                path: [
                    'policy_id'
                ],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'slm.execute_retention': {
                path: [],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'slm.get_lifecycle': {
                path: [
                    'policy_id'
                ],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'slm.get_stats': {
                path: [],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'slm.get_status': {
                path: [],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'slm.put_lifecycle': {
                path: [
                    'policy_id'
                ],
                body: [
                    'config',
                    'name',
                    'repository',
                    'retention',
                    'schedule'
                ],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'slm.start': {
                path: [],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'slm.stop': {
                path: [],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            }
        };
    }
    async deleteLifecycle(params, options) {
        const { path: acceptedPath } = this.acceptedParams['slm.delete_lifecycle'];
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
        const path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}`;
        const meta = {
            name: 'slm.delete_lifecycle',
            pathParts: {
                policy_id: params.policy_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async executeLifecycle(params, options) {
        const { path: acceptedPath } = this.acceptedParams['slm.execute_lifecycle'];
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
        const method = 'PUT';
        const path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}/_execute`;
        const meta = {
            name: 'slm.execute_lifecycle',
            pathParts: {
                policy_id: params.policy_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async executeRetention(params, options) {
        const { path: acceptedPath } = this.acceptedParams['slm.execute_retention'];
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
        const path = '/_slm/_execute_retention';
        const meta = {
            name: 'slm.execute_retention'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getLifecycle(params, options) {
        const { path: acceptedPath } = this.acceptedParams['slm.get_lifecycle'];
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
        if (params.policy_id != null) {
            method = 'GET';
            path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_slm/policy';
        }
        const meta = {
            name: 'slm.get_lifecycle',
            pathParts: {
                policy_id: params.policy_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['slm.get_stats'];
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
        const path = '/_slm/stats';
        const meta = {
            name: 'slm.get_stats'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getStatus(params, options) {
        const { path: acceptedPath } = this.acceptedParams['slm.get_status'];
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
        const path = '/_slm/status';
        const meta = {
            name: 'slm.get_status'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putLifecycle(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['slm.put_lifecycle'];
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
        const method = 'PUT';
        const path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}`;
        const meta = {
            name: 'slm.put_lifecycle',
            pathParts: {
                policy_id: params.policy_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async start(params, options) {
        const { path: acceptedPath } = this.acceptedParams['slm.start'];
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
        const path = '/_slm/start';
        const meta = {
            name: 'slm.start'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stop(params, options) {
        const { path: acceptedPath } = this.acceptedParams['slm.stop'];
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
        const path = '/_slm/stop';
        const meta = {
            name: 'slm.stop'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Slm;
//# sourceMappingURL=slm.js.map