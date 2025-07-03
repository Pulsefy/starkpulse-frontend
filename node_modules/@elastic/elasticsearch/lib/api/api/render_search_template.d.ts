import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Render a search template. Render a search template as a search request body.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-render-search-template | Elasticsearch API documentation}
  */
export default function RenderSearchTemplateApi(this: That, params?: T.RenderSearchTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RenderSearchTemplateResponse>;
export default function RenderSearchTemplateApi(this: That, params?: T.RenderSearchTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RenderSearchTemplateResponse, unknown>>;
export default function RenderSearchTemplateApi(this: That, params?: T.RenderSearchTemplateRequest, options?: TransportRequestOptions): Promise<T.RenderSearchTemplateResponse>;
export {};
