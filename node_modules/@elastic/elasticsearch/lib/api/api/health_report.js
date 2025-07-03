"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HealthReportApi;
const acceptedParams = {
    health_report: {
        path: [
            'feature'
        ],
        body: [],
        query: [
            'timeout',
            'verbose',
            'size'
        ]
    }
};
async function HealthReportApi(params, options) {
    const { path: acceptedPath } = acceptedParams.health_report;
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
    if (params.feature != null) {
        method = 'GET';
        path = `/_health_report/${encodeURIComponent(params.feature.toString())}`;
    }
    else {
        method = 'GET';
        path = '/_health_report';
    }
    const meta = {
        name: 'health_report',
        pathParts: {
            feature: params.feature
        }
    };
    return await this.transport.request({ path, method, querystring, body, meta }, options);
}
//# sourceMappingURL=health_report.js.map