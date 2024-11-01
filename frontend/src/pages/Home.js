import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    description: "Reusable, BPA-free water bottle",
    price: 15.99,
    image: "https://via.placeholder.com/200x200?text=Eco+Water+Bottle",
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    description: "100% organic cotton, fair trade certified",
    price: 29.99,
    image: "https://via.placeholder.com/200x200?text=Organic+T-Shirt",
  },
  {
    id: 3,
    name: "Bamboo Cutlery Set",
    description: "Portable, reusable bamboo utensils",
    price: 12.99,
    image: "https://via.placeholder.com/200x200?text=Bamboo+Cutlery",
  },
  {
    id: 4,
    name: "Solar-Powered Charger",
    description: "Charge your devices with solar energy",
    price: 39.99,
    image: "https://via.placeholder.com/200x200?text=Solar+Charger",
  },
  {
    id: 5,
    name: "Reusable Produce Bags",
    description: "Set of 5 mesh bags for grocery shopping",
    price: 9.99,
    image: "https://via.placeholder.com/200x200?text=Produce+Bags",
  },
  {
    id: 6,
    name: "Biodegradable Phone Case",
    description: "Protect your phone and the environment",
    price: 24.99,
    image: "https://via.placeholder.com/200x200?text=Eco+Phone+Case",
  },
];

function Home() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to EcoShop</h1>
        <p className="text-xl mb-8">
          Find eco-friendly and sustainable products for a greener lifestyle.
        </p>
        <Link
          to="/products"
          className="bg-eco-green text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
        >
          Shop All Products
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
