import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Clear a scrolling search. Clear the search context and results for a scrolling search.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-clear-scroll | Elasticsearch API documentation}
  */
export default function ClearScrollApi(this: That, params?: T.ClearScrollRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ClearScrollResponse>;
export default function ClearScrollApi(this: That, params?: T.ClearScrollRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ClearScrollResponse, unknown>>;
export default function ClearScrollApi(this: That, params?: T.ClearScrollRequest, options?: TransportRequestOptions): Promise<T.ClearScrollResponse>;
export {};
