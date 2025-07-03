import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Ping the cluster. Get information about whether the cluster is running.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/group/endpoint-cluster | Elasticsearch API documentation}
  */
export default function PingApi(this: That, params?: T.PingRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.PingResponse>;
export default function PingApi(this: That, params?: T.PingRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.PingResponse, unknown>>;
export default function PingApi(this: That, params?: T.PingRequest, options?: TransportRequestOptions): Promise<T.PingResponse>;
export {};
