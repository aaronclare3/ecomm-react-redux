const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
