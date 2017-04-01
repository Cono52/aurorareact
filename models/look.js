var mongoose = require('mongoose');

var lookSchema = new mongoose.Schema({
    img: { data: Buffer, contentType: String },
    author: String,
    rating : Number,
    skill : Number,
    price : Number,
    likes: Number
});

module.exports = mongoose.model('Look', lookSchema);