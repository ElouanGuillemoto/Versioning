const express = require('express');
const router = express.Router();
const RequestType = require('../models/requestTypes.cjs');
const mongoose = require('mongoose');

const RequestTypeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model('RequestType', RequestTypeSchema);

// GET /api/request-types
router.get('/', async (req, res) => {
  try {
    const types = await RequestType.find({ isActive: true });
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/request-types/:id
router.get('/:id', async (req, res) => {
  try {
    const type = await RequestType.findById(req.params.id);
    if (!type) return res.status(404).json({ error: 'Not found' });
    res.json(type);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/request-types
router.post('/', async (req, res) => {
  try {
    const newType = new RequestType(req.body);
    const savedType = await newType.save();
    res.status(201).json(savedType);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
