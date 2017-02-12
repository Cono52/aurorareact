const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/auroraLooks', (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(3001, () => {
        console.log('listening on 3001')
    })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/public/index.html'));
})

app.post('/looks', (req, res) => {
  db.collection('looks').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})