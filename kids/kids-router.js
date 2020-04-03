const router = require('express').Router();

const express = require('express');

const Kids = require('./kids-model.js');

router.get('/', (req, res) => {
  Kids.find()
  .then(kids => {
    res.json(kids);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get kids' });
  });
});

router.post('/', (req, res) => {
    const kidData = req.body;
    console.log(kidData)
    Kids.add(kidData)
    .then(kid => {
        
      res.status(201).json(kid);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new kid' });
    });
  });

module.exports = router;
