import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Close a point in time. A point in time must be opened explicitly before being used in search requests. The `keep_alive` parameter tells Elasticsearch how long it should persist. A point in time is automatically closed when the `keep_alive` period has elapsed. However, keeping points in time has a cost; close them as soon as they are no longer required for search requests.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-open-point-in-time | Elasticsearch API documentation}
  */
export default function ClosePointInTimeApi(this: That, params: T.ClosePointInTimeRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClosePointInTimeResponse>;
export default function ClosePointInTimeApi(this: That, params: T.ClosePointInTimeRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClosePointInTimeResponse, unknown>>;
export default function ClosePointInTimeApi(this: That, params: T.ClosePointInTimeRequest, options?: TransportRequestOptions): Promise<T.ClosePointInTimeResponse>;
export {};
