import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Get the search shards. Get the indices and shards that a search request would be run against. This information can be useful for working out issues or planning optimizations with routing and shard preferences. When filtered aliases are used, the filter is returned as part of the `indices` section. If the Elasticsearch security features are enabled, you must have the `view_index_metadata` or `manage` index privilege for the target data stream, index, or alias.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-search-shards | Elasticsearch API documentation}
  */
export default function SearchShardsApi(this: That, params?: T.SearchShardsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchShardsResponse>;
export default function SearchShardsApi(this: That, params?: T.SearchShardsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchShardsResponse, unknown>>;
export default function SearchShardsApi(this: That, params?: T.SearchShardsRequest, options?: TransportRequestOptions): Promise<T.SearchShardsResponse>;
export {};
