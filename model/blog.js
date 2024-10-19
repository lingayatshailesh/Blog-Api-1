const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title : {
    type : String,
    required : true
  },
  content : {
    type : String,
    content : true
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users",
    required : true
  },
  profileImage : {
    type : String,
    required : true
}
});

let BLOG = mongoose.model("blog",blogSchema)
module.exports = BLOG