import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Get multiple term vectors. Get multiple term vectors with a single request. You can specify existing documents by index and ID or provide artificial documents in the body of the request. You can specify the index in the request body or request URI. The response contains a `docs` array with all the fetched termvectors. Each element has the structure provided by the termvectors API. **Artificial documents** You can also use `mtermvectors` to generate term vectors for artificial documents provided in the body of the request. The mapping used is determined by the specified `_index`.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-mtermvectors | Elasticsearch API documentation}
  */
export default function MtermvectorsApi(this: That, params?: T.MtermvectorsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.MtermvectorsResponse>;
export default function MtermvectorsApi(this: That, params?: T.MtermvectorsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.MtermvectorsResponse, unknown>>;
export default function MtermvectorsApi(this: That, params?: T.MtermvectorsRequest, options?: TransportRequestOptions): Promise<T.MtermvectorsResponse>;
export {};
