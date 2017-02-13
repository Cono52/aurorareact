const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Look = require('./models/look')
const readline = require('readline')
const fs = require('fs')

mongoose.Promise = require('bluebird');
let db = mongoose.connect('mongodb://localhost:27017/auroraLooks').connection


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/api/looks', (req, res) => {
  looks.find({}, function(err, looks) {
    if (err) throw err;
     res.json(looks)
  });
})

app.listen(3001, () => {
  console.log('listening on 3001')
})


let manualInput = (imgPath, rating, skill, price) => {
  let look = new Look
  look.img.data = fs.readFileSync(imgPath)
  look.img.contentType = 'image/jpg'
  look.rating = rating
  look.skill = skill
  look.price = price
  look.save((err, a) => {
    if (err) throw err
    else console.log("saved look")
  })
}

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let recursiveAsyncReadLine = () => {
  rl.question('Command: ', (answer) => {
    if (answer == 'exit') {
      console.log("closed command")
      return rl.close()
    }
    else if(answer.indexOf("mockpics") != -1){
      let params = answer.split(", ")
      manualInput(params[0], params[1], params[2], params[3])
      console.log(params)
      console.log("picture")
    }
    recursiveAsyncReadLine()
  })
}

recursiveAsyncReadLine()