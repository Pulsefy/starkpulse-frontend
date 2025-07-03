import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Get a script or search template. Retrieves a stored script or search template.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-get-script | Elasticsearch API documentation}
  */
export default function GetScriptApi(this: That, params: T.GetScriptRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.GetScriptResponse>;
export default function GetScriptApi(this: That, params: T.GetScriptRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.GetScriptResponse, unknown>>;
export default function GetScriptApi(this: That, params: T.GetScriptRequest, options?: TransportRequestOptions): Promise<T.GetScriptResponse>;
export {};
