"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Tasks {
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
            'tasks.cancel': {
                path: [
                    'task_id'
                ],
                body: [],
                query: [
                    'actions',
                    'nodes',
                    'parent_task_id',
                    'wait_for_completion'
                ]
            },
            'tasks.get': {
                path: [
                    'task_id'
                ],
                body: [],
                query: [
                    'timeout',
                    'wait_for_completion'
                ]
            },
            'tasks.list': {
                path: [],
                body: [],
                query: [
                    'actions',
                    'detailed',
                    'group_by',
                    'nodes',
                    'parent_task_id',
                    'timeout',
                    'wait_for_completion'
                ]
            }
        };
    }
    async cancel(params, options) {
        const { path: acceptedPath } = this.acceptedParams['tasks.cancel'];
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
        if (params.task_id != null) {
            method = 'POST';
            path = `/_tasks/${encodeURIComponent(params.task_id.toString())}/_cancel`;
        }
        else {
            method = 'POST';
            path = '/_tasks/_cancel';
        }
        const meta = {
            name: 'tasks.cancel',
            pathParts: {
                task_id: params.task_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async get(params, options) {
        const { path: acceptedPath } = this.acceptedParams['tasks.get'];
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
        const path = `/_tasks/${encodeURIComponent(params.task_id.toString())}`;
        const meta = {
            name: 'tasks.get',
            pathParts: {
                task_id: params.task_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async list(params, options) {
        const { path: acceptedPath } = this.acceptedParams['tasks.list'];
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
        const path = '/_tasks';
        const meta = {
            name: 'tasks.list'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Tasks;
//# sourceMappingURL=tasks.js.map