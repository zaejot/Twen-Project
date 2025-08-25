const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const undanganRoutes = require("./src/routes/undanganRoutes");

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

app.use("/undangan", undanganRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/undangan")
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`Server Running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error(err));
