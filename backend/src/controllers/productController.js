const Product = require("../models/Product");

const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Gagal memuat data", error: err.message });
  }
};

module.exports = { getProduct };
