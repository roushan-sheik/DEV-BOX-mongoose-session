const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
  }
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
