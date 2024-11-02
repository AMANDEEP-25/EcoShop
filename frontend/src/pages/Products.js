import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const fallbackProducts = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    description: "Reusable, BPA-free water bottle",
    price: 15.99,
    image: "waterBottle.jpeg",
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    description: "100% organic cotton, fair trade certified",
    price: 29.99,
    image: "t-shirt.webp",
  },
  {
    id: 3,
    name: "Bamboo Cutlery Set",
    description: "Portable, reusable bamboo utensils",
    price: 12.99,
    image: "bambocurlenary.jpeg",
  },
  {
    id: 4,
    name: "Solar-Powered Charger",
    description: "Charge your devices with solar energy",
    price: 39.99,
    image: "Charger.jpeg",
  },
  {
    id: 5,
    name: "Reusable Produce Bags",
    description: "Set of 5 mesh bags for grocery shopping",
    price: 9.99,
    image: "bags.jpeg",
  },
  {
    id: 6,
    name: "Biodegradable Phone Case",
    description: "Protect your phone and the environment",
    price: 24.99,
    image: "phonecase.jpeg",
  },
];

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        console.log("API response:", res.data); // Log the API response
        if (Array.isArray(res.data) && res.data.length > 0) {
          setProducts(res.data);
        } else {
          console.log(
            "API returned empty or invalid data. Using fallback products."
          );
          setProducts(fallbackProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(
          "Failed to load products from API. Displaying fallback products."
        );
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return <div className="text-center py-10">Loading products...</div>;

  if (error) {
    console.log("Displaying error message:", error);
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  console.log("Rendering products:", products); // Log the products being rendered

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      {products.length === 0 ? (
        <p className="text-center py-10">
          No products available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
