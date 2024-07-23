import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CartContext from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="max-w-lg mx-auto p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-gray-700 mb-4">${product.price}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
