// Backfill script: Sync all MongoDB data to Elasticsearch
const mongoose = require('mongoose');
const esClient = require('../src/config/elasticsearch');
const { News, Portfolio, User } = require('../src/models');
const config = require('../src/config/environment');

async function backfillModel(Model, index) {
  const docs = await Model.find({});
  for (const doc of docs) {
    await esClient.index({
      index,
      id: doc._id.toString(),
      document: doc.toObject(),
    });
  }
  console.log(`Backfilled ${docs.length} documents to ${index}`);
}

async function main() {
  await mongoose.connect(config.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await backfillModel(News, 'news');
  await backfillModel(Portfolio, 'portfolio');
  await backfillModel(User, 'users');
  await mongoose.disconnect();
  console.log('Backfill complete.');
}

main().catch(err => {
  console.error('Backfill error:', err);
  process.exit(1);
});
