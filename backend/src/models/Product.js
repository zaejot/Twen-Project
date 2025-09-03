const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

productSchema.plugin(AutoIncrement, { inc_field: "productId", start_seq: 1 });

module.exports = mongoose.model("Product", productSchema);
