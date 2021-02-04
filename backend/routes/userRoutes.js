const express = require("express");
const router = express.Router();

const { createUser } = require("../controller/userController");

// @desc POST user to DB
// @route POST /api/user
// @access Public
router.post("/", createUser);

module.exports = router;
