"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Connector {
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
            'connector.check_in': {
                path: [
                    'connector_id'
                ],
                body: [],
                query: []
            },
            'connector.delete': {
                path: [
                    'connector_id'
                ],
                body: [],
                query: [
                    'delete_sync_jobs',
                    'hard'
                ]
            },
            'connector.get': {
                path: [
                    'connector_id'
                ],
                body: [],
                query: [
                    'include_deleted'
                ]
            },
            'connector.last_sync': {
                path: [
                    'connector_id'
                ],
                body: [
                    'last_access_control_sync_error',
                    'last_access_control_sync_scheduled_at',
                    'last_access_control_sync_status',
                    'last_deleted_document_count',
                    'last_incremental_sync_scheduled_at',
                    'last_indexed_document_count',
                    'last_seen',
                    'last_sync_error',
                    'last_sync_scheduled_at',
                    'last_sync_status',
                    'last_synced',
                    'sync_cursor'
                ],
                query: []
            },
            'connector.list': {
                path: [],
                body: [],
                query: [
                    'from',
                    'size',
                    'index_name',
                    'connector_name',
                    'service_type',
                    'include_deleted',
                    'query'
                ]
            },
            'connector.post': {
                path: [],
                body: [
                    'description',
                    'index_name',
                    'is_native',
                    'language',
                    'name',
                    'service_type'
                ],
                query: []
            },
            'connector.put': {
                path: [
                    'connector_id'
                ],
                body: [
                    'description',
                    'index_name',
                    'is_native',
                    'language',
                    'name',
                    'service_type'
                ],
                query: []
            },
            'connector.secret_delete': {
                path: [
                    'id'
                ],
                body: [],
                query: []
            },
            'connector.secret_get': {
                path: [
                    'id'
                ],
                body: [],
                query: []
            },
            'connector.secret_post': {
                path: [],
                body: [],
                query: []
            },
            'connector.secret_put': {
                path: [
                    'id'
                ],
                body: [],
                query: []
            },
            'connector.sync_job_cancel': {
                path: [
                    'connector_sync_job_id'
                ],
                body: [],
                query: []
            },
            'connector.sync_job_check_in': {
                path: [
                    'connector_sync_job_id'
                ],
                body: [],
                query: []
            },
            'connector.sync_job_claim': {
                path: [
                    'connector_sync_job_id'
                ],
                body: [
                    'sync_cursor',
                    'worker_hostname'
                ],
                query: []
            },
            'connector.sync_job_delete': {
                path: [
                    'connector_sync_job_id'
                ],
                body: [],
                query: []
            },
            'connector.sync_job_error': {
                path: [
                    'connector_sync_job_id'
                ],
                body: [
                    'error'
                ],
                query: []
            },
            'connector.sync_job_get': {
                path: [
                    'connector_sync_job_id'
                ],
                body: [],
                query: []
            },
            'connector.sync_job_list': {
                path: [],
                body: [],
                query: [
                    'from',
                    'size',
                    'status',
                    'connector_id',
                    'job_type'
                ]
            },
            'connector.sync_job_post': {
                path: [],
                body: [
                    'id',
                    'job_type',
                    'trigger_method'
                ],
                query: []
            },
            'connector.sync_job_update_stats': {
                path: [
                    'connector_sync_job_id'
                ],
                body: [
                    'deleted_document_count',
                    'indexed_document_count',
                    'indexed_document_volume',
                    'last_seen',
                    'metadata',
                    'total_document_count'
                ],
                query: []
            },
            'connector.update_active_filtering': {
                path: [
                    'connector_id'
                ],
                body: [],
                query: []
            },
            'connector.update_api_key_id': {
                path: [
                    'connector_id'
                ],
                body: [
                    'api_key_id',
                    'api_key_secret_id'
                ],
                query: []
            },
            'connector.update_configuration': {
                path: [
                    'connector_id'
                ],
                body: [
                    'configuration',
                    'values'
                ],
                query: []
            },
            'connector.update_error': {
                path: [
                    'connector_id'
                ],
                body: [
                    'error'
                ],
                query: []
            },
            'connector.update_features': {
                path: [
                    'connector_id'
                ],
                body: [
                    'features'
                ],
                query: []
            },
            'connector.update_filtering': {
                path: [
                    'connector_id'
                ],
                body: [
                    'filtering',
                    'rules',
                    'advanced_snippet'
                ],
                query: []
            },
            'connector.update_filtering_validation': {
                path: [
                    'connector_id'
                ],
                body: [
                    'validation'
                ],
                query: []
            },
            'connector.update_index_name': {
                path: [
                    'connector_id'
                ],
                body: [
                    'index_name'
                ],
                query: []
            },
            'connector.update_name': {
                path: [
                    'connector_id'
                ],
                body: [
                    'name',
                    'description'
                ],
                query: []
            },
            'connector.update_native': {
                path: [
                    'connector_id'
                ],
                body: [
                    'is_native'
                ],
                query: []
            },
            'connector.update_pipeline': {
                path: [
                    'connector_id'
                ],
                body: [
                    'pipeline'
                ],
                query: []
            },
            'connector.update_scheduling': {
                path: [
                    'connector_id'
                ],
                body: [
                    'scheduling'
                ],
                query: []
            },
            'connector.update_service_type': {
                path: [
                    'connector_id'
                ],
                body: [
                    'service_type'
                ],
                query: []
            },
            'connector.update_status': {
                path: [
                    'connector_id'
                ],
                body: [
                    'status'
                ],
                query: []
            }
        };
    }
    async checkIn(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.check_in'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_check_in`;
        const meta = {
            name: 'connector.check_in',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async delete(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.delete'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}`;
        const meta = {
            name: 'connector.delete',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async get(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.get'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}`;
        const meta = {
            name: 'connector.get',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async lastSync(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.last_sync'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_last_sync`;
        const meta = {
            name: 'connector.last_sync',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async list(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.list'];
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
        const path = '/_connector';
        const meta = {
            name: 'connector.list'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async post(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.post'];
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
        const method = 'POST';
        const path = '/_connector';
        const meta = {
            name: 'connector.post'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async put(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.put'];
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
        if (params.connector_id != null) {
            method = 'PUT';
            path = `/_connector/${encodeURIComponent(params.connector_id.toString())}`;
        }
        else {
            method = 'PUT';
            path = '/_connector';
        }
        const meta = {
            name: 'connector.put',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async secretDelete(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.secret_delete'];
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
        const method = 'DELETE';
        const path = `/_connector/_secret/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'connector.secret_delete',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async secretGet(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.secret_get'];
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
        const path = `/_connector/_secret/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'connector.secret_get',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async secretPost(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.secret_post'];
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
        const method = 'POST';
        const path = '/_connector/_secret';
        const meta = {
            name: 'connector.secret_post'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async secretPut(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.secret_put'];
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
        const method = 'PUT';
        const path = `/_connector/_secret/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'connector.secret_put',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async syncJobCancel(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.sync_job_cancel'];
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
        const path = `/_connector/_sync_job/${encodeURIComponent(params.connector_sync_job_id.toString())}/_cancel`;
        const meta = {
            name: 'connector.sync_job_cancel',
            pathParts: {
                connector_sync_job_id: params.connector_sync_job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async syncJobCheckIn(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.sync_job_check_in'];
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
        const path = `/_connector/_sync_job/${encodeURIComponent(params.connector_sync_job_id.toString())}/_check_in`;
        const meta = {
            name: 'connector.sync_job_check_in',
            pathParts: {
                connector_sync_job_id: params.connector_sync_job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async syncJobClaim(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.sync_job_claim'];
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
        const path = `/_connector/_sync_job/${encodeURIComponent(params.connector_sync_job_id.toString())}/_claim`;
        const meta = {
            name: 'connector.sync_job_claim',
            pathParts: {
                connector_sync_job_id: params.connector_sync_job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async syncJobDelete(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.sync_job_delete'];
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
        const path = `/_connector/_sync_job/${encodeURIComponent(params.connector_sync_job_id.toString())}`;
        const meta = {
            name: 'connector.sync_job_delete',
            pathParts: {
                connector_sync_job_id: params.connector_sync_job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async syncJobError(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.sync_job_error'];
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
        const path = `/_connector/_sync_job/${encodeURIComponent(params.connector_sync_job_id.toString())}/_error`;
        const meta = {
            name: 'connector.sync_job_error',
            pathParts: {
                connector_sync_job_id: params.connector_sync_job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async syncJobGet(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.sync_job_get'];
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
        const path = `/_connector/_sync_job/${encodeURIComponent(params.connector_sync_job_id.toString())}`;
        const meta = {
            name: 'connector.sync_job_get',
            pathParts: {
                connector_sync_job_id: params.connector_sync_job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async syncJobList(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.sync_job_list'];
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
        const path = '/_connector/_sync_job';
        const meta = {
            name: 'connector.sync_job_list'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async syncJobPost(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.sync_job_post'];
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
        const path = '/_connector/_sync_job';
        const meta = {
            name: 'connector.sync_job_post'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async syncJobUpdateStats(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.sync_job_update_stats'];
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
        const path = `/_connector/_sync_job/${encodeURIComponent(params.connector_sync_job_id.toString())}/_stats`;
        const meta = {
            name: 'connector.sync_job_update_stats',
            pathParts: {
                connector_sync_job_id: params.connector_sync_job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateActiveFiltering(params, options) {
        const { path: acceptedPath } = this.acceptedParams['connector.update_active_filtering'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_filtering/_activate`;
        const meta = {
            name: 'connector.update_active_filtering',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateApiKeyId(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_api_key_id'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_api_key_id`;
        const meta = {
            name: 'connector.update_api_key_id',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateConfiguration(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_configuration'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_configuration`;
        const meta = {
            name: 'connector.update_configuration',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateError(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_error'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_error`;
        const meta = {
            name: 'connector.update_error',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateFeatures(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_features'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_features`;
        const meta = {
            name: 'connector.update_features',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateFiltering(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_filtering'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_filtering`;
        const meta = {
            name: 'connector.update_filtering',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateFilteringValidation(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_filtering_validation'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_filtering/_validation`;
        const meta = {
            name: 'connector.update_filtering_validation',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateIndexName(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_index_name'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_index_name`;
        const meta = {
            name: 'connector.update_index_name',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateName(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_name'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_name`;
        const meta = {
            name: 'connector.update_name',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateNative(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_native'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_native`;
        const meta = {
            name: 'connector.update_native',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updatePipeline(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_pipeline'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_pipeline`;
        const meta = {
            name: 'connector.update_pipeline',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateScheduling(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_scheduling'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_scheduling`;
        const meta = {
            name: 'connector.update_scheduling',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateServiceType(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_service_type'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_service_type`;
        const meta = {
            name: 'connector.update_service_type',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateStatus(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['connector.update_status'];
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
        const path = `/_connector/${encodeURIComponent(params.connector_id.toString())}/_status`;
        const meta = {
            name: 'connector.update_status',
            pathParts: {
                connector_id: params.connector_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Connector;
//# sourceMappingURL=connector.js.map