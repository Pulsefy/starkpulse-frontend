// Elasticsearch configuration
const { Client } = require('@elastic/elasticsearch');
const config = require('./environment');

const esClient = new Client({
  node: config.elasticsearchUrl || process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
  auth: config.elasticsearchAuth || undefined,
});

module.exports = esClient;
