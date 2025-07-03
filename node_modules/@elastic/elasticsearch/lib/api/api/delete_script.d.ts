import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Delete a script or search template. Deletes a stored script or search template.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-delete-script | Elasticsearch API documentation}
  */
export default function DeleteScriptApi(this: That, params: T.DeleteScriptRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.DeleteScriptResponse>;
export default function DeleteScriptApi(this: That, params: T.DeleteScriptRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.DeleteScriptResponse, unknown>>;
export default function DeleteScriptApi(this: That, params: T.DeleteScriptRequest, options?: TransportRequestOptions): Promise<T.DeleteScriptResponse>;
export {};
