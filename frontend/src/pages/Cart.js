import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CardContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/200x200?text=Product+Image";
  };

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-xl mb-8">Your cart is currently empty.</p>
        <Link
          to="/products"
          className="bg-eco-green text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-4"
        >
          <div className="flex items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded mr-4"
              onError={handleImageError}
            />
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
        <button className="mt-4 bg-eco-green text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
