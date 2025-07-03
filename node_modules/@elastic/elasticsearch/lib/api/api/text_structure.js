"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class TextStructure {
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
            'text_structure.find_field_structure': {
                path: [],
                body: [],
                query: [
                    'column_names',
                    'delimiter',
                    'documents_to_sample',
                    'ecs_compatibility',
                    'explain',
                    'field',
                    'format',
                    'grok_pattern',
                    'index',
                    'quote',
                    'should_trim_fields',
                    'timeout',
                    'timestamp_field',
                    'timestamp_format'
                ]
            },
            'text_structure.find_message_structure': {
                path: [],
                body: [
                    'messages'
                ],
                query: [
                    'column_names',
                    'delimiter',
                    'ecs_compatibility',
                    'explain',
                    'format',
                    'grok_pattern',
                    'quote',
                    'should_trim_fields',
                    'timeout',
                    'timestamp_field',
                    'timestamp_format'
                ]
            },
            'text_structure.find_structure': {
                path: [],
                body: [
                    'text_files'
                ],
                query: [
                    'charset',
                    'column_names',
                    'delimiter',
                    'ecs_compatibility',
                    'explain',
                    'format',
                    'grok_pattern',
                    'has_header_row',
                    'line_merge_size_limit',
                    'lines_to_sample',
                    'quote',
                    'should_trim_fields',
                    'timeout',
                    'timestamp_field',
                    'timestamp_format'
                ]
            },
            'text_structure.test_grok_pattern': {
                path: [],
                body: [
                    'grok_pattern',
                    'text'
                ],
                query: [
                    'ecs_compatibility'
                ]
            }
        };
    }
    async findFieldStructure(params, options) {
        const { path: acceptedPath } = this.acceptedParams['text_structure.find_field_structure'];
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
        const path = '/_text_structure/find_field_structure';
        const meta = {
            name: 'text_structure.find_field_structure'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async findMessageStructure(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['text_structure.find_message_structure'];
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
        const method = body != null ? 'POST' : 'GET';
        const path = '/_text_structure/find_message_structure';
        const meta = {
            name: 'text_structure.find_message_structure'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async findStructure(params, options) {
        var _a;
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['text_structure.find_structure'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body = (_a = params.body) !== null && _a !== void 0 ? _a : undefined;
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                // @ts-expect-error
                body = params[key];
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
        const path = '/_text_structure/find_structure';
        const meta = {
            name: 'text_structure.find_structure'
        };
        return await this.transport.request({ path, method, querystring, bulkBody: body, meta }, options);
    }
    async testGrokPattern(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['text_structure.test_grok_pattern'];
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
        const method = body != null ? 'POST' : 'GET';
        const path = '/_text_structure/test_grok_pattern';
        const meta = {
            name: 'text_structure.test_grok_pattern'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = TextStructure;
//# sourceMappingURL=text_structure.js.map