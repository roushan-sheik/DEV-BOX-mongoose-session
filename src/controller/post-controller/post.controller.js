const Post = require("../../models/Post.js");

const getAllPost = async (req, res) => {
  try {
    const allPost = await Post.find();
    res.status(200).json(allPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// create post
const createPost = async (req, res) => {
  try {
    const newPost = await Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// get single post
const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate("author");
    if (!post) {
      res.status(404).json({ message: "Post note found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// update post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedPost) {
      res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// delete post
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json({message: "Deleted successful"})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPost,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
};
