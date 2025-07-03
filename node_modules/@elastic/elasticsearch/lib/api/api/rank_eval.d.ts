import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
interface That {
    transport: Transport;
}
/**
  * Evaluate ranked search results. Evaluate the quality of ranked search results over a set of typical search queries.
  * @see {@link https://www.elastic.co/docs/api/doc/elasticsearch/v9/operation/operation-rank-eval | Elasticsearch API documentation}
  */
export default function RankEvalApi(this: That, params: T.RankEvalRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RankEvalResponse>;
export default function RankEvalApi(this: That, params: T.RankEvalRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RankEvalResponse, unknown>>;
export default function RankEvalApi(this: That, params: T.RankEvalRequest, options?: TransportRequestOptions): Promise<T.RankEvalResponse>;
export {};
