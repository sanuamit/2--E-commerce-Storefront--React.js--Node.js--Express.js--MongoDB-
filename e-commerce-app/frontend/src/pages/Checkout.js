import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();
  const { setCartItems } = useContext(CartContext);

  const handleCompletePurchase = () => {
    // Clear the cart
    setCartItems([]);
    // Navigate to the homepage
    navigate("/");
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="text-gray-700 mb-4">Thank you for your purchase!</p>
      <button
        onClick={handleCompletePurchase}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Complete Purchase
      </button>
    </div>
  );
}

export default Checkout;
