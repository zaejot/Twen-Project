const Register = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // console.log("👉 req.body:", req.body);

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    const exist = await Register.findOne({ email });
    // console.log("👉 hasil exist:", exist);

    if (exist) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await Register.create({
      fullName,
      email,
      password: hashed,
    });

    res.status(201).json({ message: "Registrasi berhasil", user });
  } catch (err) {
    console.error("Error register:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { registerUser };
