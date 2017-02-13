const express = require('express');
const app = express();
const mongoose = require('mongoose');
const look = require('./models/looks');

let db = mongoose.connect('mongodb://localhost:27017/auroraLooks').connection


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/looks', (req, res) => {
  db.collection('looks').find((err, looks) => {
    if (err) return console.log(err)
    res.json(looks)
  })
})

app.listen(3001, () => {
  console.log('listening on 3001')
})