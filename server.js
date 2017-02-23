const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Look = require('./models/look')
const readline = require('readline')

const multer = require('multer')
const upload = multer({dest: 'uploads/'});
const async = require('async')
const _ = require('lodash')
const easyimg = require('easyimage')
const cv = require('opencv')

const fs = require('fs')
const app = express()

var exts = {
  'image/jpeg'   :   '.jpg',
  'image/png'    :   '.png',
  'image/gif'    :   '.gif'
}

/*db setup*/
mongoose.Promise = require('bluebird')
let db = mongoose.connect('mongodb://localhost:27017/auroraLooks').connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/api/looks', (req, res) => {
  Look.find({}, function(err, looks) {
    if (err) throw err
     res.json(looks)
  });
})

app.post('/api/checkImage', upload.single('file') , (req, res, next) => {
  let filename = req.file.filename + exts[req.file.mimetype]
  let src = __dirname + '/' + req.file.path
  let dst = __dirname + './images/' + filename;
  async.waterfall(
    [( callback ) => {
        if (!_.contains(
          [
            'image/jpeg',
            'image/png',
            'image/gif'
          ],
          req.file.mimetype
        )) {
          return callback( new Error( 'Invalid file - please upload an image (.jpg, .png, .gif).' ) )
        }
        return callback();
      },
      ( callback ) => {
        easyimg.info( src )
        .then(file => {return callback()})
      },
      ( callback ) => {
        easyimg.resize(
          {
            width      :   960,
            src        :   src,
            dst        :   dst
          }
        ).then(image => {
          return callback();
        });
      },
      ( callback ) => { cv.readImage( dst, callback )},
      ( im, callback ) => { im.detectObject( cv.FACE_CASCADE, {}, callback ) }
    ],
    ( err, faces ) => {
      if ( err ) res.send({'valid': 'no'})

      res.send({'faces': faces.length})
    }
  );
})

app.listen(3001, () => {
  console.log('listening on 3001')
})


let manualInput = (imgPath, rating, skill, price) => {
  let look = new Look
  look.img.data = fs.readFileSync(imgPath, 'base64')
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