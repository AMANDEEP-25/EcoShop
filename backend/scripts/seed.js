// scripts/seedProducts.js
const mongoose = require("mongoose");
const Product = require("../models/Products");
require("dotenv").config();

const products = [
  {
    name: "Eco-Friendly Water Bottle",
    description: "Reusable, BPA-free water bottle",
    price: 15.99,
    image: "https://via.placeholder.com/200x200?text=Eco+Water+Bottle",
  },
  {
    name: "Organic Cotton T-Shirt",
    description: "100% organic cotton, fair trade certified",
    price: 29.99,
    image: "https://via.placeholder.com/200x200?text=Organic+T-Shirt",
  },
  {
    name: "Bamboo Cutlery Set",
    description: "Portable, reusable bamboo utensils",
    price: 12.99,
    image: "https://via.placeholder.com/200x200?text=Bamboo+Cutlery",
  },
  {
    name: "Solar-Powered Charger",
    description: "Charge your devices with solar energy",
    price: 39.99,
    image: "https://via.placeholder.com/200x200?text=Solar+Charger",
  },
  {
    name: "Reusable Produce Bags",
    description: "Set of 5 mesh bags for grocery shopping",
    price: 9.99,
    image: "https://via.placeholder.com/200x200?text=Produce+Bags",
  },
  {
    name: "Biodegradable Phone Case",
    description: "Protect your phone and the environment",
    price: 24.99,
    image: "https://via.placeholder.com/200x200?text=Eco+Phone+Case",
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("MongoDB connected");
    await Product.deleteMany({}); // Clear existing products
    await Product.insertMany(products);
    console.log("Products seeded successfully");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
