const express = require('express');
const db = require('../utils/db');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('cars')
    .where({ id })
    .first()
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('cars')
    .insert(carData)
    .first() //use when you want the first
    .then(id => {
      db('cars')
        .where({ id })
        .then(newCar => {
          res.status(201).json(newCar);
        });
    })
    .catch(err => {
      console.log('POST error', err);
      res.status(500).json({ message: 'Failed to store data' });
    });
});

module.exports = router;
