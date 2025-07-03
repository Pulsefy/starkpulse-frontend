// SearchService: Handles search, filtering, auto-complete, and analytics for news, portfolio, and users
const esClient = require('../config/elasticsearch');

const NEWS_INDEX = 'news';
const PORTFOLIO_INDEX = 'portfolio';
const USER_INDEX = 'users';

module.exports = {
  // Index a document (news, portfolio, user)
  async indexDocument(index, id, body) {
    return esClient.index({ index, id, document: body });
  },

  // Full-text search with faceted filtering
  async search(index, query, filters = {}, from = 0, size = 10) {
    const esQuery = {
      bool: {
        must: query ? [{ multi_match: { query, fields: ['title^3', 'content', 'tags', 'name', 'email'] } }] : [],
        filter: Object.entries(filters).map(([field, value]) => ({ term: { [field]: value } })),
      },
    };
    return esClient.search({
      index,
      from,
      size,
      query: esQuery,
    });
  },

  // Auto-complete suggestions
  async autoComplete(index, field, prefix, size = 5) {
    return esClient.search({
      index,
      size,
      query: {
        match_phrase_prefix: {
          [field]: prefix,
        },
      },
      _source: [field],
    });
  },

  // Log search analytics
  async logSearchAnalytics(query, userId, index) {
    return esClient.index({
      index: 'search-analytics',
      document: { query, userId, index, timestamp: new Date() },
    });
  },
};
