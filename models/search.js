

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    searchTerm: String,
    date: { 
        type: Date, 
        default: Date.now },
});

const Search = mongoose.model('searches', searchSchema);

module.exports = Search;
