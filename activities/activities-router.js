const router = require('express').Router();

const express = require('express');
// const restricted = require('../auth/restrited-middleware.js');

const Activities = require('./activities-model.js');

// GET() returns the whole Activities table
router.get('/', (req, res) => {
    Activities.find()
    .then(activities => {
      res.json(activities);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get activity' });
    });
  });


// POST() adds row to Activities table
router.post('/', (req, res) => {
  const activityData = req.body;
  // console.log(kidData)
  Activities.add(activityData)
  .then(activity => {
      
    res.status(201).json(activity);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new activity' });
  });
});

// PUT() edits row for Activities table
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
  Activities.findById(id)
    .then(activity => {
      if (activity) {
        Activities.update(changes, id)
        .then(updatedActivity => {
          res.status(200).json(updatedActivity);
        });
      } else {
        res.status(404).json({ message: 'Could not find activity with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update activity' });
    });
  });


// DELETE() deletes Activity selected 
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  Activities.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ message: 'Activity deleted successfully!'});
    } else {
      res.status(404).json({ message: 'Could not find activity with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete activity' });
  });
});

module.exports = router;