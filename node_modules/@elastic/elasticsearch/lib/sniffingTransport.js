"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_assert_1 = tslib_1.__importDefault(require("node:assert"));
const transport_1 = require("@elastic/transport");
class SniffingTransport extends transport_1.Transport {
    sniff(opts) {
        var _a;
        if (this.isSniffing)
            return;
        this.isSniffing = true;
        const request = {
            method: 'GET',
            path: (_a = this.sniffEndpoint) !== null && _a !== void 0 ? _a : '/_nodes/_all/http'
        };
        this.request(request, { id: opts.requestId, meta: true })
            .then(result => {
            var _a, _b;
            (0, node_assert_1.default)(isObject(result.body), 'The body should be an object');
            this.isSniffing = false;
            const protocol = (_b = (_a = result.meta.connection) === null || _a === void 0 ? void 0 : _a.url.protocol) !== null && _b !== void 0 ? _b : 'http:';
            const hosts = this.connectionPool.nodesToHost(result.body.nodes, protocol);
            this.connectionPool.update(hosts);
            result.meta.sniff = { hosts, reason: opts.reason };
            this.diagnostic.emit('sniff', null, result);
        })
            .catch(err => {
            this.isSniffing = false;
            err.meta.sniff = { hosts: [], reason: opts.reason };
            this.diagnostic.emit('sniff', err, null);
        });
    }
}
exports.default = SniffingTransport;
function isObject(obj) {
    return typeof obj === 'object';
}
//# sourceMappingURL=sniffingTransport.js.map