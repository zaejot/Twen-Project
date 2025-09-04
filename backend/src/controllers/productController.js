const Product = require("../models/Product");

const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Gagal memuat data", error: err.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, price, desc, stock } = req.body;

    if (!name || !price || !desc || !stock) {
      return res.status(400).json({ message: "Semua field harus diisi" });
    }

    const product = await Product.create({
      name,
      price,
      desc,
      stock,
    });

    res.status(201).json({ message: "Item berhasil ditambahkan!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { getProduct, addProduct };
