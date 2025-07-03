const mongoose = require('mongoose');
const searchService = require('../services/searchService');
const esClient = require('../config/elasticsearch');

const assetSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    uppercase: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  buyPrice: {
    type: Number,
    required: true,
    min: 0
  },
  buyDate: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    trim: true
  }
}, { _id: false });

const portfolioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  assets: [assetSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

portfolioSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index to Elasticsearch after save
portfolioSchema.post('save', async function(doc) {
  await searchService.indexDocument('portfolio', doc._id.toString(), doc.toObject());
});

// Remove from Elasticsearch after delete
portfolioSchema.post('remove', async function(doc) {
  await esClient.delete({ index: 'portfolio', id: doc._id.toString() }).catch(() => {});
});

module.exports = mongoose.model('Portfolio', portfolioSchema);