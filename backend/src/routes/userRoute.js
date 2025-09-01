const express = require("express");
const { registerUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const { loginUser } = require("../controllers/authController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
