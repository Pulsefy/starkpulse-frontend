const mongoose = require('mongoose');
const searchService = require('../services/searchService');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  tags: [{ type: String, trim: true }],
  author: { type: String, trim: true },
  publishedAt: { type: Date, default: Date.now },
  source: { type: String, trim: true },
  url: { type: String, trim: true },
  image: { type: String, trim: true },
}, { timestamps: true });

// Index to Elasticsearch after save
newsSchema.post('save', async function(doc) {
  await searchService.indexDocument('news', doc._id.toString(), doc.toObject());
});
// Remove from Elasticsearch after delete
newsSchema.post('remove', async function(doc) {
  const esClient = require('../config/elasticsearch');
  await esClient.delete({ index: 'news', id: doc._id.toString() }).catch(() => {});
});

module.exports = mongoose.model('News', newsSchema);
