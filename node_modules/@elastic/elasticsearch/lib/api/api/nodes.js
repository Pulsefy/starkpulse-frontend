"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Nodes {
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
            'nodes.clear_repositories_metering_archive': {
                path: [
                    'node_id',
                    'max_archive_version'
                ],
                body: [],
                query: []
            },
            'nodes.get_repositories_metering_info': {
                path: [
                    'node_id'
                ],
                body: [],
                query: []
            },
            'nodes.hot_threads': {
                path: [
                    'node_id'
                ],
                body: [],
                query: [
                    'ignore_idle_threads',
                    'interval',
                    'snapshots',
                    'threads',
                    'timeout',
                    'type',
                    'sort'
                ]
            },
            'nodes.info': {
                path: [
                    'node_id',
                    'metric'
                ],
                body: [],
                query: [
                    'flat_settings',
                    'timeout'
                ]
            },
            'nodes.reload_secure_settings': {
                path: [
                    'node_id'
                ],
                body: [
                    'secure_settings_password'
                ],
                query: [
                    'timeout'
                ]
            },
            'nodes.stats': {
                path: [
                    'node_id',
                    'metric',
                    'index_metric'
                ],
                body: [],
                query: [
                    'completion_fields',
                    'fielddata_fields',
                    'fields',
                    'groups',
                    'include_segment_file_sizes',
                    'level',
                    'timeout',
                    'types',
                    'include_unloaded_segments'
                ]
            },
            'nodes.usage': {
                path: [
                    'node_id',
                    'metric'
                ],
                body: [],
                query: [
                    'timeout'
                ]
            }
        };
    }
    async clearRepositoriesMeteringArchive(params, options) {
        const { path: acceptedPath } = this.acceptedParams['nodes.clear_repositories_metering_archive'];
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
        const path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/_repositories_metering/${encodeURIComponent(params.max_archive_version.toString())}`;
        const meta = {
            name: 'nodes.clear_repositories_metering_archive',
            pathParts: {
                node_id: params.node_id,
                max_archive_version: params.max_archive_version
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getRepositoriesMeteringInfo(params, options) {
        const { path: acceptedPath } = this.acceptedParams['nodes.get_repositories_metering_info'];
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
        const path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/_repositories_metering`;
        const meta = {
            name: 'nodes.get_repositories_metering_info',
            pathParts: {
                node_id: params.node_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async hotThreads(params, options) {
        const { path: acceptedPath } = this.acceptedParams['nodes.hot_threads'];
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
        if (params.node_id != null) {
            method = 'GET';
            path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/hot_threads`;
        }
        else {
            method = 'GET';
            path = '/_nodes/hot_threads';
        }
        const meta = {
            name: 'nodes.hot_threads',
            pathParts: {
                node_id: params.node_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async info(params, options) {
        const { path: acceptedPath } = this.acceptedParams['nodes.info'];
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
        if (params.node_id != null && params.metric != null) {
            method = 'GET';
            path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/${encodeURIComponent(params.metric.toString())}`;
        }
        else if (params.node_id != null) {
            method = 'GET';
            path = `/_nodes/${encodeURIComponent(params.node_id.toString())}`;
        }
        else if (params.metric != null) {
            method = 'GET';
            path = `/_nodes/${encodeURIComponent(params.metric.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_nodes';
        }
        const meta = {
            name: 'nodes.info',
            pathParts: {
                node_id: params.node_id,
                metric: params.metric
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async reloadSecureSettings(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['nodes.reload_secure_settings'];
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
        if (params.node_id != null) {
            method = 'POST';
            path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/reload_secure_settings`;
        }
        else {
            method = 'POST';
            path = '/_nodes/reload_secure_settings';
        }
        const meta = {
            name: 'nodes.reload_secure_settings',
            pathParts: {
                node_id: params.node_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['nodes.stats'];
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
        if (params.node_id != null && params.metric != null && params.index_metric != null) {
            method = 'GET';
            path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/stats/${encodeURIComponent(params.metric.toString())}/${encodeURIComponent(params.index_metric.toString())}`;
        }
        else if (params.node_id != null && params.metric != null) {
            method = 'GET';
            path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/stats/${encodeURIComponent(params.metric.toString())}`;
        }
        else if (params.metric != null && params.index_metric != null) {
            method = 'GET';
            path = `/_nodes/stats/${encodeURIComponent(params.metric.toString())}/${encodeURIComponent(params.index_metric.toString())}`;
        }
        else if (params.node_id != null) {
            method = 'GET';
            path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/stats`;
        }
        else if (params.metric != null) {
            method = 'GET';
            path = `/_nodes/stats/${encodeURIComponent(params.metric.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_nodes/stats';
        }
        const meta = {
            name: 'nodes.stats',
            pathParts: {
                node_id: params.node_id,
                metric: params.metric,
                index_metric: params.index_metric
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async usage(params, options) {
        const { path: acceptedPath } = this.acceptedParams['nodes.usage'];
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
        if (params.node_id != null && params.metric != null) {
            method = 'GET';
            path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/usage/${encodeURIComponent(params.metric.toString())}`;
        }
        else if (params.node_id != null) {
            method = 'GET';
            path = `/_nodes/${encodeURIComponent(params.node_id.toString())}/usage`;
        }
        else if (params.metric != null) {
            method = 'GET';
            path = `/_nodes/usage/${encodeURIComponent(params.metric.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_nodes/usage';
        }
        const meta = {
            name: 'nodes.usage',
            pathParts: {
                node_id: params.node_id,
                metric: params.metric
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Nodes;
//# sourceMappingURL=nodes.js.map