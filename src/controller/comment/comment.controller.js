const Comment = require("../../models/Comment.js");

const getAllComment = async (req, res) => {
  try {
    const allComments = await Comment.find();
    res.status(200).json(allComments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// create comment
const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// getSingleComment
const getSingleComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id).populate(["authorId", "postId"]);
    if (!comment) {
      res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedComment) {
      res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// delete comment
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted Successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllComment,
  createComment,
  getSingleComment,
  updateComment,
  deleteComment,
};
