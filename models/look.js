var mongoose = require('mongoose');

var lookSchema = new mongoose.Schema({
    img: { data: Buffer, contentType: String },
    rating : Number,
    skill : Number,
    price : Number
});

module.exports = mongoose.model('Look', lookSchema);