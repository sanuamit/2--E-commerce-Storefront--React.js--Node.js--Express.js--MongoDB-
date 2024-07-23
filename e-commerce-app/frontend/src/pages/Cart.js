import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="flex justify-between items-center mt-8">
            <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <button
              className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
