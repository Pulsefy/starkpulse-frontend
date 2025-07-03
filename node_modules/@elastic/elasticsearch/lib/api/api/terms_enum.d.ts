import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Get terms in an index. Discover terms that match a partial string in an index. This API is designed for low-latency look-ups used in auto-complete scenarios. > info > The terms enum API may return terms from deleted documents. Deleted documents are initially only marked as deleted. It is not until their segments are merged that documents are actually deleted. Until that happens, the terms enum API will return terms from these documents.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-terms-enum | Elasticsearch API documentation}
  */
export default function TermsEnumApi(this: That, params: T.TermsEnumRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TermsEnumResponse>;
export default function TermsEnumApi(this: That, params: T.TermsEnumRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TermsEnumResponse, unknown>>;
export default function TermsEnumApi(this: That, params: T.TermsEnumRequest, options?: TransportRequestOptions): Promise<T.TermsEnumResponse>;
export {};
