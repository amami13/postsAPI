const mongoose = require("mongoose");
   
const postSchema = new mongoose.Schema({
    message: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
  });
  
const Post = mongoose.model("Post", postSchema);
  
module.exports = Post;