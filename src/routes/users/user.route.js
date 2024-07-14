const express = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controller/user/user.controller");

const router = express.Router();

router.get("/", getAllUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
