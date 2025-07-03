import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Explain a document match result. Get information about why a specific document matches, or doesn't match, a query. It computes a score explanation for a query and a specific document.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-explain | Elasticsearch API documentation}
  */
export default function ExplainApi<TDocument = unknown>(this: That, params: T.ExplainRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ExplainResponse<TDocument>>;
export default function ExplainApi<TDocument = unknown>(this: That, params: T.ExplainRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ExplainResponse<TDocument>, unknown>>;
export default function ExplainApi<TDocument = unknown>(this: That, params: T.ExplainRequest, options?: TransportRequestOptions): Promise<T.ExplainResponse<TDocument>>;
export {};
