import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
    acceptedParams: Record<string, {
        path: string[];
        body: string[];
        query: string[];
    }>;
}
export default class Monitoring {
    transport: Transport;
    acceptedParams: Record<string, {
        path: string[];
        body: string[];
        query: string[];
    }>;
    constructor(transport: Transport);
    /**
      * Send monitoring data. This API is used by the monitoring features to send monitoring data.
      * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch | Elasticsearch API documentation}
      */
    bulk<TDocument = unknown, TPartialDocument = unknown>(this: That, params: T.MonitoringBulkRequest<TDocument, TPartialDocument>, options?: TransportRequestOptionsWithOutMeta): Promise<T.MonitoringBulkResponse>;
    bulk<TDocument = unknown, TPartialDocument = unknown>(this: That, params: T.MonitoringBulkRequest<TDocument, TPartialDocument>, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MonitoringBulkResponse, unknown>>;
    bulk<TDocument = unknown, TPartialDocument = unknown>(this: That, params: T.MonitoringBulkRequest<TDocument, TPartialDocument>, options?: TransportRequestOptions): Promise<T.MonitoringBulkResponse>;
}
export {};
