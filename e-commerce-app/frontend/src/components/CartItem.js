import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function CartItem({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    const updatedQuantity = parseInt(e.target.value, 10);
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: updatedQuantity }
          : cartItem
      )
    );
  };

  const removeFromCart = () => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1 mx-4">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-700">${item.price}</p>
        <div className="flex items-center mt-2">
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="w-12 text-center border border-gray-300 rounded"
          />
          <button
            className="text-red-500 ml-4 hover:underline"
            onClick={removeFromCart}
          >
            Remove
          </button>
        </div>
      </div>
      <p className="text-gray-700 font-bold">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}

export default CartItem;
