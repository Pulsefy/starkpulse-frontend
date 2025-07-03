import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Get the field capabilities. Get information about the capabilities of fields among multiple indices. For data streams, the API returns field capabilities among the stream’s backing indices. It returns runtime fields like any other field. For example, a runtime field with a type of keyword is returned the same as any other field that belongs to the `keyword` family.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-field-caps | Elasticsearch API documentation}
  */
export default function FieldCapsApi(this: That, params?: T.FieldCapsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FieldCapsResponse>;
export default function FieldCapsApi(this: That, params?: T.FieldCapsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FieldCapsResponse, unknown>>;
export default function FieldCapsApi(this: That, params?: T.FieldCapsRequest, options?: TransportRequestOptions): Promise<T.FieldCapsResponse>;
export {};
