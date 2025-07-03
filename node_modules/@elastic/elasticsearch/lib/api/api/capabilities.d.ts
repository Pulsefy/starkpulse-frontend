import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Checks if the specified combination of method, API, parameters, and arbitrary capabilities are supported
  * @see {@link https://github.com/elastic/elasticsearch/blob/main/rest-api-spec/src/yamlRestTest/resources/rest-api-spec/test/README.asciidoc#require-or-skip-api-capabilities | Elasticsearch API documentation}
  */
export default function CapabilitiesApi(this: That, params?: T.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
export default function CapabilitiesApi(this: That, params?: T.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
export default function CapabilitiesApi(this: That, params?: T.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
export {};
