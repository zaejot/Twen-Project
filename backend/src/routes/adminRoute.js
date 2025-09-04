const express = require("express");
const { Dashboard } = require("../controllers/adminController");

router.post("/admin", Dashboard)

const router = express.Router;

module.exports = router;