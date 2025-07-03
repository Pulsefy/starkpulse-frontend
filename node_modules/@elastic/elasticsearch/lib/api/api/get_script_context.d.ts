import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Get script contexts. Get a list of supported script contexts and their methods.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-get-script-context | Elasticsearch API documentation}
  */
export default function GetScriptContextApi(this: That, params?: T.GetScriptContextRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.GetScriptContextResponse>;
export default function GetScriptContextApi(this: That, params?: T.GetScriptContextRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.GetScriptContextResponse, unknown>>;
export default function GetScriptContextApi(this: That, params?: T.GetScriptContextRequest, options?: TransportRequestOptions): Promise<T.GetScriptContextResponse>;
export {};
