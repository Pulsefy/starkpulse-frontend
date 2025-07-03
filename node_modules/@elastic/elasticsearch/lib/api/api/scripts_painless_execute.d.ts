import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Run a script. Runs a script and returns a result. Use this API to build and test scripts, such as when defining a script for a runtime field. This API requires very few dependencies and is especially useful if you don't have permissions to write documents on a cluster. The API uses several _contexts_, which control how scripts are run, what variables are available at runtime, and what the return type is. Each context requires a script, but additional parameters depend on the context you're using for that script.
  * @see {@link https://www.elastic.co/docs/reference/scripting-languages/painless/painless-api-examples | Elasticsearch API documentation}
  */
export default function ScriptsPainlessExecuteApi<TResult = unknown>(this: That, params?: T.ScriptsPainlessExecuteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.ScriptsPainlessExecuteResponse<TResult>>;
export default function ScriptsPainlessExecuteApi<TResult = unknown>(this: That, params?: T.ScriptsPainlessExecuteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.ScriptsPainlessExecuteResponse<TResult>, unknown>>;
export default function ScriptsPainlessExecuteApi<TResult = unknown>(this: That, params?: T.ScriptsPainlessExecuteRequest, options?: TransportRequestOptions): Promise<T.ScriptsPainlessExecuteResponse<TResult>>;
export {};
