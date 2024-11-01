import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CardContext";

function Navbar() {
  const { cart } = useCart();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-eco-green p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          EcoShop
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-eco-light">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-eco-light">
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-white hover:text-eco-light flex items-center"
            >
              Cart
              {cartItemsCount > 0 && (
                <span className="ml-1 bg-white text-eco-green rounded-full px-2 py-1 text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
