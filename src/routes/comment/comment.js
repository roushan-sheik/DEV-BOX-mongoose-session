const express = require("express");
const {
  getAllComment,
  createComment,
  getSingleComment,
  updateComment,
  deleteComment,
} = require("../../controller/comment/comment.controller.js");
const router = express.Router();

router.get("/", getAllComment);
router.post("/", createComment);
router.get("/:id", getSingleComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
