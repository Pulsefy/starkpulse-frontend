"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class QueryRules {
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
            'query_rules.delete_rule': {
                path: [
                    'ruleset_id',
                    'rule_id'
                ],
                body: [],
                query: []
            },
            'query_rules.delete_ruleset': {
                path: [
                    'ruleset_id'
                ],
                body: [],
                query: []
            },
            'query_rules.get_rule': {
                path: [
                    'ruleset_id',
                    'rule_id'
                ],
                body: [],
                query: []
            },
            'query_rules.get_ruleset': {
                path: [
                    'ruleset_id'
                ],
                body: [],
                query: []
            },
            'query_rules.list_rulesets': {
                path: [],
                body: [],
                query: [
                    'from',
                    'size'
                ]
            },
            'query_rules.put_rule': {
                path: [
                    'ruleset_id',
                    'rule_id'
                ],
                body: [
                    'type',
                    'criteria',
                    'actions',
                    'priority'
                ],
                query: []
            },
            'query_rules.put_ruleset': {
                path: [
                    'ruleset_id'
                ],
                body: [
                    'rules'
                ],
                query: []
            },
            'query_rules.test': {
                path: [
                    'ruleset_id'
                ],
                body: [
                    'match_criteria'
                ],
                query: []
            }
        };
    }
    async deleteRule(params, options) {
        const { path: acceptedPath } = this.acceptedParams['query_rules.delete_rule'];
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
        const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}/_rule/${encodeURIComponent(params.rule_id.toString())}`;
        const meta = {
            name: 'query_rules.delete_rule',
            pathParts: {
                ruleset_id: params.ruleset_id,
                rule_id: params.rule_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteRuleset(params, options) {
        const { path: acceptedPath } = this.acceptedParams['query_rules.delete_ruleset'];
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
        const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}`;
        const meta = {
            name: 'query_rules.delete_ruleset',
            pathParts: {
                ruleset_id: params.ruleset_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getRule(params, options) {
        const { path: acceptedPath } = this.acceptedParams['query_rules.get_rule'];
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
        const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}/_rule/${encodeURIComponent(params.rule_id.toString())}`;
        const meta = {
            name: 'query_rules.get_rule',
            pathParts: {
                ruleset_id: params.ruleset_id,
                rule_id: params.rule_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getRuleset(params, options) {
        const { path: acceptedPath } = this.acceptedParams['query_rules.get_ruleset'];
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
        const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}`;
        const meta = {
            name: 'query_rules.get_ruleset',
            pathParts: {
                ruleset_id: params.ruleset_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async listRulesets(params, options) {
        const { path: acceptedPath } = this.acceptedParams['query_rules.list_rulesets'];
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
        const path = '/_query_rules';
        const meta = {
            name: 'query_rules.list_rulesets'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putRule(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['query_rules.put_rule'];
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
        const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}/_rule/${encodeURIComponent(params.rule_id.toString())}`;
        const meta = {
            name: 'query_rules.put_rule',
            pathParts: {
                ruleset_id: params.ruleset_id,
                rule_id: params.rule_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putRuleset(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['query_rules.put_ruleset'];
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
        const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}`;
        const meta = {
            name: 'query_rules.put_ruleset',
            pathParts: {
                ruleset_id: params.ruleset_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async test(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['query_rules.test'];
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
        const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}/_test`;
        const meta = {
            name: 'query_rules.test',
            pathParts: {
                ruleset_id: params.ruleset_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = QueryRules;
//# sourceMappingURL=query_rules.js.map