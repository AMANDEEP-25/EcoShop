import React from "react";
import { useCart } from "../contexts/CardContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/200x200?text=Product+Image";
  };

  if (!product) {
    console.error("ProductCard received undefined product");
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img
        src={
          product.image ||
          "https://via.placeholder.com/200x200?text=Product+Image"
        }
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
        onError={handleImageError}
      />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-eco-green font-bold">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-eco-green text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
