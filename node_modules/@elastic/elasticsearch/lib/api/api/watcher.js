"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Watcher {
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
            'watcher.ack_watch': {
                path: [
                    'watch_id',
                    'action_id'
                ],
                body: [],
                query: []
            },
            'watcher.activate_watch': {
                path: [
                    'watch_id'
                ],
                body: [],
                query: []
            },
            'watcher.deactivate_watch': {
                path: [
                    'watch_id'
                ],
                body: [],
                query: []
            },
            'watcher.delete_watch': {
                path: [
                    'id'
                ],
                body: [],
                query: []
            },
            'watcher.execute_watch': {
                path: [
                    'id'
                ],
                body: [
                    'action_modes',
                    'alternative_input',
                    'ignore_condition',
                    'record_execution',
                    'simulated_actions',
                    'trigger_data',
                    'watch'
                ],
                query: [
                    'debug'
                ]
            },
            'watcher.get_settings': {
                path: [],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'watcher.get_watch': {
                path: [
                    'id'
                ],
                body: [],
                query: []
            },
            'watcher.put_watch': {
                path: [
                    'id'
                ],
                body: [
                    'actions',
                    'condition',
                    'input',
                    'metadata',
                    'throttle_period',
                    'throttle_period_in_millis',
                    'transform',
                    'trigger'
                ],
                query: [
                    'active',
                    'if_primary_term',
                    'if_seq_no',
                    'version'
                ]
            },
            'watcher.query_watches': {
                path: [],
                body: [
                    'from',
                    'size',
                    'query',
                    'sort',
                    'search_after'
                ],
                query: []
            },
            'watcher.start': {
                path: [],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'watcher.stats': {
                path: [
                    'metric'
                ],
                body: [],
                query: [
                    'emit_stacktraces',
                    'metric'
                ]
            },
            'watcher.stop': {
                path: [],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'watcher.update_settings': {
                path: [],
                body: [
                    'index.auto_expand_replicas',
                    'index.number_of_replicas'
                ],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            }
        };
    }
    async ackWatch(params, options) {
        const { path: acceptedPath } = this.acceptedParams['watcher.ack_watch'];
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
        let method = '';
        let path = '';
        if (params.watch_id != null && params.action_id != null) {
            method = 'PUT';
            path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_ack/${encodeURIComponent(params.action_id.toString())}`;
        }
        else {
            method = 'PUT';
            path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_ack`;
        }
        const meta = {
            name: 'watcher.ack_watch',
            pathParts: {
                watch_id: params.watch_id,
                action_id: params.action_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async activateWatch(params, options) {
        const { path: acceptedPath } = this.acceptedParams['watcher.activate_watch'];
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
        const path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_activate`;
        const meta = {
            name: 'watcher.activate_watch',
            pathParts: {
                watch_id: params.watch_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deactivateWatch(params, options) {
        const { path: acceptedPath } = this.acceptedParams['watcher.deactivate_watch'];
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
        const path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_deactivate`;
        const meta = {
            name: 'watcher.deactivate_watch',
            pathParts: {
                watch_id: params.watch_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteWatch(params, options) {
        const { path: acceptedPath } = this.acceptedParams['watcher.delete_watch'];
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
        const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'watcher.delete_watch',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async executeWatch(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['watcher.execute_watch'];
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
        if (params.id != null) {
            method = 'PUT';
            path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}/_execute`;
        }
        else {
            method = 'PUT';
            path = '/_watcher/watch/_execute';
        }
        const meta = {
            name: 'watcher.execute_watch',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getSettings(params, options) {
        const { path: acceptedPath } = this.acceptedParams['watcher.get_settings'];
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
        const path = '/_watcher/settings';
        const meta = {
            name: 'watcher.get_settings'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getWatch(params, options) {
        const { path: acceptedPath } = this.acceptedParams['watcher.get_watch'];
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
        const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'watcher.get_watch',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putWatch(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['watcher.put_watch'];
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
        const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'watcher.put_watch',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async queryWatches(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['watcher.query_watches'];
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
        const method = body != null ? 'POST' : 'GET';
        const path = '/_watcher/_query/watches';
        const meta = {
            name: 'watcher.query_watches'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async start(params, options) {
        const { path: acceptedPath } = this.acceptedParams['watcher.start'];
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
        const path = '/_watcher/_start';
        const meta = {
            name: 'watcher.start'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['watcher.stats'];
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
        if (params.metric != null) {
            method = 'GET';
            path = `/_watcher/stats/${encodeURIComponent(params.metric.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_watcher/stats';
        }
        const meta = {
            name: 'watcher.stats',
            pathParts: {
                metric: params.metric
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stop(params, options) {
        const { path: acceptedPath } = this.acceptedParams['watcher.stop'];
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
        const path = '/_watcher/_stop';
        const meta = {
            name: 'watcher.stop'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateSettings(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['watcher.update_settings'];
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
        const method = 'PUT';
        const path = '/_watcher/settings';
        const meta = {
            name: 'watcher.update_settings'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Watcher;
//# sourceMappingURL=watcher.js.map