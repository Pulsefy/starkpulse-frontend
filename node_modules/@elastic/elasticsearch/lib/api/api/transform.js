"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Transform {
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
            'transform.delete_transform': {
                path: [
                    'transform_id'
                ],
                body: [],
                query: [
                    'force',
                    'delete_dest_index',
                    'timeout'
                ]
            },
            'transform.get_node_stats': {
                path: [],
                body: [],
                query: []
            },
            'transform.get_transform': {
                path: [
                    'transform_id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'from',
                    'size',
                    'exclude_generated'
                ]
            },
            'transform.get_transform_stats': {
                path: [
                    'transform_id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'from',
                    'size',
                    'timeout'
                ]
            },
            'transform.preview_transform': {
                path: [
                    'transform_id'
                ],
                body: [
                    'dest',
                    'description',
                    'frequency',
                    'pivot',
                    'source',
                    'settings',
                    'sync',
                    'retention_policy',
                    'latest'
                ],
                query: [
                    'timeout'
                ]
            },
            'transform.put_transform': {
                path: [
                    'transform_id'
                ],
                body: [
                    'dest',
                    'description',
                    'frequency',
                    'latest',
                    '_meta',
                    'pivot',
                    'retention_policy',
                    'settings',
                    'source',
                    'sync'
                ],
                query: [
                    'defer_validation',
                    'timeout'
                ]
            },
            'transform.reset_transform': {
                path: [
                    'transform_id'
                ],
                body: [],
                query: [
                    'force',
                    'timeout'
                ]
            },
            'transform.schedule_now_transform': {
                path: [
                    'transform_id'
                ],
                body: [],
                query: [
                    'timeout'
                ]
            },
            'transform.start_transform': {
                path: [
                    'transform_id'
                ],
                body: [],
                query: [
                    'timeout',
                    'from'
                ]
            },
            'transform.stop_transform': {
                path: [
                    'transform_id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'force',
                    'timeout',
                    'wait_for_checkpoint',
                    'wait_for_completion'
                ]
            },
            'transform.update_transform': {
                path: [
                    'transform_id'
                ],
                body: [
                    'dest',
                    'description',
                    'frequency',
                    '_meta',
                    'source',
                    'settings',
                    'sync',
                    'retention_policy'
                ],
                query: [
                    'defer_validation',
                    'timeout'
                ]
            },
            'transform.upgrade_transforms': {
                path: [],
                body: [],
                query: [
                    'dry_run',
                    'timeout'
                ]
            }
        };
    }
    async deleteTransform(params, options) {
        const { path: acceptedPath } = this.acceptedParams['transform.delete_transform'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}`;
        const meta = {
            name: 'transform.delete_transform',
            pathParts: {
                transform_id: params.transform_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getNodeStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['transform.get_node_stats'];
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
        const path = '/_transform/_node_stats';
        const meta = {
            name: 'transform.get_node_stats'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getTransform(params, options) {
        const { path: acceptedPath } = this.acceptedParams['transform.get_transform'];
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
        if (params.transform_id != null) {
            method = 'GET';
            path = `/_transform/${encodeURIComponent(params.transform_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_transform';
        }
        const meta = {
            name: 'transform.get_transform',
            pathParts: {
                transform_id: params.transform_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getTransformStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['transform.get_transform_stats'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_stats`;
        const meta = {
            name: 'transform.get_transform_stats',
            pathParts: {
                transform_id: params.transform_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async previewTransform(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['transform.preview_transform'];
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
        if (params.transform_id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_preview`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_transform/_preview';
        }
        const meta = {
            name: 'transform.preview_transform',
            pathParts: {
                transform_id: params.transform_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putTransform(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['transform.put_transform'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}`;
        const meta = {
            name: 'transform.put_transform',
            pathParts: {
                transform_id: params.transform_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async resetTransform(params, options) {
        const { path: acceptedPath } = this.acceptedParams['transform.reset_transform'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_reset`;
        const meta = {
            name: 'transform.reset_transform',
            pathParts: {
                transform_id: params.transform_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async scheduleNowTransform(params, options) {
        const { path: acceptedPath } = this.acceptedParams['transform.schedule_now_transform'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_schedule_now`;
        const meta = {
            name: 'transform.schedule_now_transform',
            pathParts: {
                transform_id: params.transform_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async startTransform(params, options) {
        const { path: acceptedPath } = this.acceptedParams['transform.start_transform'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_start`;
        const meta = {
            name: 'transform.start_transform',
            pathParts: {
                transform_id: params.transform_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stopTransform(params, options) {
        const { path: acceptedPath } = this.acceptedParams['transform.stop_transform'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_stop`;
        const meta = {
            name: 'transform.stop_transform',
            pathParts: {
                transform_id: params.transform_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateTransform(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['transform.update_transform'];
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
        const method = 'POST';
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_update`;
        const meta = {
            name: 'transform.update_transform',
            pathParts: {
                transform_id: params.transform_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async upgradeTransforms(params, options) {
        const { path: acceptedPath } = this.acceptedParams['transform.upgrade_transforms'];
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
        const path = '/_transform/_upgrade';
        const meta = {
            name: 'transform.upgrade_transforms'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Transform;
//# sourceMappingURL=transform.js.map