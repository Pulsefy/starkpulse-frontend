import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Run a search with a search template.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-search-template | Elasticsearch API documentation}
  */
export default function SearchTemplateApi<TDocument = unknown>(this: That, params?: T.SearchTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchTemplateResponse<TDocument>>;
export default function SearchTemplateApi<TDocument = unknown>(this: That, params?: T.SearchTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchTemplateResponse<TDocument>, unknown>>;
export default function SearchTemplateApi<TDocument = unknown>(this: That, params?: T.SearchTemplateRequest, options?: TransportRequestOptions): Promise<T.SearchTemplateResponse<TDocument>>;
export {};
