const express = require('express');
const RequestType = require('../models/RequestType.cjs');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const types = await RequestType.find();
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await RequestType.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const type = new RequestType(req.body);
    const saved = await type.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
