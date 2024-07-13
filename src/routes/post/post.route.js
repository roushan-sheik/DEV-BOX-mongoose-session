const express = require("express");
const {
  getAllPost,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../../controller/post-controller/post.controller.js");

const route = express.Router();

route.get("/", getAllPost);
route.post("/", createPost);
route.get("/:id", getSinglePost);
route.put("/:id", updatePost);
route.delete("/:id", deletePost);

module.exports = route;
