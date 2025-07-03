import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Create or update a script or search template. Creates or updates a stored script or search template.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-put-script | Elasticsearch API documentation}
  */
export default function PutScriptApi(this: That, params: T.PutScriptRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.PutScriptResponse>;
export default function PutScriptApi(this: That, params: T.PutScriptRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.PutScriptResponse, unknown>>;
export default function PutScriptApi(this: That, params: T.PutScriptRequest, options?: TransportRequestOptions): Promise<T.PutScriptResponse>;
export {};
