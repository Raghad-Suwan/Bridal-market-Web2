const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const search= new Schema({  
    searchTerm:  String,
  })  

  const Search =mongoose.model("searches",search)  

  module.exports = Search;