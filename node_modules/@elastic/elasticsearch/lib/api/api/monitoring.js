"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Monitoring {
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
            'monitoring.bulk': {
                path: [
                    'type'
                ],
                body: [
                    'operations'
                ],
                query: [
                    'system_id',
                    'system_api_version',
                    'interval'
                ]
            }
        };
    }
    async bulk(params, options) {
        var _a;
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['monitoring.bulk'];
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
        const path = '/_monitoring/bulk';
        const meta = {
            name: 'monitoring.bulk',
            pathParts: {
                type: params.type
            }
        };
        return await this.transport.request({ path, method, querystring, bulkBody: body, meta }, options);
    }
}
exports.default = Monitoring;
//# sourceMappingURL=monitoring.js.map