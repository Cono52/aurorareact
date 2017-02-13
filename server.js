const express = require('express');
const app = express();
const mongoose = require('mongoose');
const looks = require('./models/looks');

let db = mongoose.connect('mongodb://localhost:27017/auroraLooks').connection


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/looks', (req, res) => {
  looks.find({}, function(err, users) {
    if (err) throw err;
    // object of all the users
     res.json(users)
  });
})

app.listen(3001, () => {
  console.log('listening on 3001')
})