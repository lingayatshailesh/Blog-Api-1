const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content : {
    type : String,
    required : true
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users",
    required : true
  },
  blogId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "blog",
    required : true
  }
});

let COMMENT = mongoose.model("comment",commentSchema)
module.exports = COMMENT