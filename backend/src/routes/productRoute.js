const express = require("express");
const { getProduct, addProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/products", getProduct);
router.post("/product", addProduct);

module.exports = router;
