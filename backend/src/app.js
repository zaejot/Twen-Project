const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const registerRoute = require("./routes/userRoute");
const cors = require("cors");

dotenv.config();
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

module.exports = app;
