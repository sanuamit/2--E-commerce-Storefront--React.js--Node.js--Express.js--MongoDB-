import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link
        to={`/product/${product._id}`}
        className="mt-4 block bg-blue-500 text-white text-center py-2 rounded-md"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
