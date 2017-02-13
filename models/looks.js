var mongoose = require('mongoose');

var looksSchema = new mongoose.Schema({
    id : String,
    rating : Number,
    skill : Number
});

module.exports = mongoose.model('Looks', looksSchema);