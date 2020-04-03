const router = require('express').Router();

const express = require('express');
const restricted = require('../auth/restrited-middleware.js');

const Kids = require('./kids-model.js');

// GET() gives Kids full table
router.get('/', restricted, (req, res) => {
  Kids.find()
  .then(kids => {
    res.json(kids);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get kids' });
  });
});

// POST() adds row to Kids table
router.post('/', restricted, (req, res) => {
    const kidData = req.body;
    // console.log(kidData)
    Kids.add(kidData)
    .then(kid => {
        
      res.status(201).json(kid);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new kid' });
    });
  });


// PUT() edits row for Kids table
router.put('/:id', restricted, (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Kids.findById(id)
    .then(kid => {
      if (kid) {
        Kids.update(changes, id)
        .then(updatedKid => {
          res.status(200).json(updatedKid);
        });
      } else {
        res.status(404).json({ message: 'Could not find kid with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update kid' });
    });
  });

// DELETE() deletes kid selected 
router.delete('/:id', restricted, (req, res) => {
    const { id } = req.params;
    
    Kids.remove(id)
    .then(deleted => {
        // console.log(deleted)
      if (deleted) {
        res.json({ removed: deleted, message: 'Kid deleted successfully!'});
      } else {
        res.status(404).json({ message: 'Could not find kid with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete kid' });
    });
  });

module.exports = router;
