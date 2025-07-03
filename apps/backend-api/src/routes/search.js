// Search API routes for news, portfolio, and users
const express = require('express');
const router = express.Router();
const searchService = require('../services/searchService');

// Full-text search endpoint
router.get('/:type', async (req, res) => {
  const { type } = req.params;
  const { q, ...filters } = req.query;
  const index = type === 'news' ? 'news' : type === 'portfolio' ? 'portfolio' : type === 'users' ? 'users' : null;
  if (!index) return res.status(400).json({ error: 'Invalid type' });
  try {
    const result = await searchService.search(index, q, filters);
    await searchService.logSearchAnalytics(q, req.user?.id, index);
    res.json(result.hits.hits.map(hit => hit._source));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Auto-complete endpoint
router.get('/:type/autocomplete', async (req, res) => {
  const { type } = req.params;
  const { field, prefix } = req.query;
  const index = type === 'news' ? 'news' : type === 'portfolio' ? 'portfolio' : type === 'users' ? 'users' : null;
  if (!index || !field || !prefix) return res.status(400).json({ error: 'Missing params' });
  try {
    const result = await searchService.autoComplete(index, field, prefix);
    res.json(result.hits.hits.map(hit => hit._source[field]));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
