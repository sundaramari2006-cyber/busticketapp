const express = require('express');
const router = express.Router();
const busModel = require('../models/buses');

router.get('/api/buses', async (req, res) => {
  const { from, to, date } = req.query;

  if (!from || !to || !date) {
    return res.status(400).json({ error: 'Please provide from, to, and date' });
  }

  try {
    const buses = await busModel.find({
      from: new RegExp(`^${from}$`, 'i'),
      to: new RegExp(`^${to}$`, 'i'),
      date: date.trim()
    });
    res.json(buses);
  } catch (err) {
    console.error("GET error:", err);
    res.status(500).json({ error: 'Failed to fetch buses' });
  }
});

router.post('/api/buses', async (req, res) => {
  const { name, from, to, date, time } = req.body;

  if (!name || !from || !to || !date || !time) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newBus = new busModel({ name, from, to, date, time });
    await newBus.save();
    res.status(201).json({ message: 'Bus added successfully', bus: newBus });
  } catch (err) {
    console.error("POST error:", err);
    res.status(500).json({ error: 'Failed to add bus' });
  }
});

module.exports = router;
