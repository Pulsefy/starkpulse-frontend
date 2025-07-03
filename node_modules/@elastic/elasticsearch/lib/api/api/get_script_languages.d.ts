import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Get script languages. Get a list of available script types, languages, and contexts.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-get-script-languages | Elasticsearch API documentation}
  */
export default function GetScriptLanguagesApi(this: That, params?: T.GetScriptLanguagesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.GetScriptLanguagesResponse>;
export default function GetScriptLanguagesApi(this: That, params?: T.GetScriptLanguagesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.GetScriptLanguagesResponse, unknown>>;
export default function GetScriptLanguagesApi(this: That, params?: T.GetScriptLanguagesRequest, options?: TransportRequestOptions): Promise<T.GetScriptLanguagesResponse>;
export {};
