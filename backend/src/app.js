const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const express = require("express");
const connectDB = require("./config/db");
const registerRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const cors = require("cors");

connectDB();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Routes
app.use("/api", registerRoute);
app.use("/api", productRoute);

module.exports = app;
