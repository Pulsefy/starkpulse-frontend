"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Ccr {
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
            'ccr.delete_auto_follow_pattern': {
                path: [
                    'name'
                ],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'ccr.follow': {
                path: [
                    'index'
                ],
                body: [
                    'data_stream_name',
                    'leader_index',
                    'max_outstanding_read_requests',
                    'max_outstanding_write_requests',
                    'max_read_request_operation_count',
                    'max_read_request_size',
                    'max_retry_delay',
                    'max_write_buffer_count',
                    'max_write_buffer_size',
                    'max_write_request_operation_count',
                    'max_write_request_size',
                    'read_poll_timeout',
                    'remote_cluster',
                    'settings'
                ],
                query: [
                    'master_timeout',
                    'wait_for_active_shards'
                ]
            },
            'ccr.follow_info': {
                path: [
                    'index'
                ],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'ccr.follow_stats': {
                path: [
                    'index'
                ],
                body: [],
                query: [
                    'timeout'
                ]
            },
            'ccr.forget_follower': {
                path: [
                    'index'
                ],
                body: [
                    'follower_cluster',
                    'follower_index',
                    'follower_index_uuid',
                    'leader_remote_cluster'
                ],
                query: [
                    'timeout'
                ]
            },
            'ccr.get_auto_follow_pattern': {
                path: [
                    'name'
                ],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'ccr.pause_auto_follow_pattern': {
                path: [
                    'name'
                ],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'ccr.pause_follow': {
                path: [
                    'index'
                ],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'ccr.put_auto_follow_pattern': {
                path: [
                    'name'
                ],
                body: [
                    'remote_cluster',
                    'follow_index_pattern',
                    'leader_index_patterns',
                    'leader_index_exclusion_patterns',
                    'max_outstanding_read_requests',
                    'settings',
                    'max_outstanding_write_requests',
                    'read_poll_timeout',
                    'max_read_request_operation_count',
                    'max_read_request_size',
                    'max_retry_delay',
                    'max_write_buffer_count',
                    'max_write_buffer_size',
                    'max_write_request_operation_count',
                    'max_write_request_size'
                ],
                query: [
                    'master_timeout'
                ]
            },
            'ccr.resume_auto_follow_pattern': {
                path: [
                    'name'
                ],
                body: [],
                query: [
                    'master_timeout'
                ]
            },
            'ccr.resume_follow': {
                path: [
                    'index'
                ],
                body: [
                    'max_outstanding_read_requests',
                    'max_outstanding_write_requests',
                    'max_read_request_operation_count',
                    'max_read_request_size',
                    'max_retry_delay',
                    'max_write_buffer_count',
                    'max_write_buffer_size',
                    'max_write_request_operation_count',
                    'max_write_request_size',
                    'read_poll_timeout'
                ],
                query: [
                    'master_timeout'
                ]
            },
            'ccr.stats': {
                path: [],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'ccr.unfollow': {
                path: [
                    'index'
                ],
                body: [],
                query: [
                    'master_timeout'
                ]
            }
        };
    }
    async deleteAutoFollowPattern(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ccr.delete_auto_follow_pattern'];
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
        const path = `/_ccr/auto_follow/${encodeURIComponent(params.name.toString())}`;
        const meta = {
            name: 'ccr.delete_auto_follow_pattern',
            pathParts: {
                name: params.name
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async follow(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ccr.follow'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_ccr/follow`;
        const meta = {
            name: 'ccr.follow',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async followInfo(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ccr.follow_info'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_ccr/info`;
        const meta = {
            name: 'ccr.follow_info',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async followStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ccr.follow_stats'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_ccr/stats`;
        const meta = {
            name: 'ccr.follow_stats',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async forgetFollower(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ccr.forget_follower'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_ccr/forget_follower`;
        const meta = {
            name: 'ccr.forget_follower',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getAutoFollowPattern(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ccr.get_auto_follow_pattern'];
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
        if (params.name != null) {
            method = 'GET';
            path = `/_ccr/auto_follow/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ccr/auto_follow';
        }
        const meta = {
            name: 'ccr.get_auto_follow_pattern',
            pathParts: {
                name: params.name
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async pauseAutoFollowPattern(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ccr.pause_auto_follow_pattern'];
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
        const path = `/_ccr/auto_follow/${encodeURIComponent(params.name.toString())}/pause`;
        const meta = {
            name: 'ccr.pause_auto_follow_pattern',
            pathParts: {
                name: params.name
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async pauseFollow(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ccr.pause_follow'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_ccr/pause_follow`;
        const meta = {
            name: 'ccr.pause_follow',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putAutoFollowPattern(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ccr.put_auto_follow_pattern'];
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
        const path = `/_ccr/auto_follow/${encodeURIComponent(params.name.toString())}`;
        const meta = {
            name: 'ccr.put_auto_follow_pattern',
            pathParts: {
                name: params.name
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async resumeAutoFollowPattern(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ccr.resume_auto_follow_pattern'];
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
        const path = `/_ccr/auto_follow/${encodeURIComponent(params.name.toString())}/resume`;
        const meta = {
            name: 'ccr.resume_auto_follow_pattern',
            pathParts: {
                name: params.name
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async resumeFollow(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ccr.resume_follow'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_ccr/resume_follow`;
        const meta = {
            name: 'ccr.resume_follow',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ccr.stats'];
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
        const path = '/_ccr/stats';
        const meta = {
            name: 'ccr.stats'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async unfollow(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ccr.unfollow'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_ccr/unfollow`;
        const meta = {
            name: 'ccr.unfollow',
            pathParts: {
                index: params.index
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Ccr;
//# sourceMappingURL=ccr.js.map