const express = require("express");
const {
  getAllUser,
  createUser,
} = require("../../controller/user-controller/user.controller");

const router = express.Router();

router.get("/", getAllUser);
router.post("/", createUser);

module.exports = router;
