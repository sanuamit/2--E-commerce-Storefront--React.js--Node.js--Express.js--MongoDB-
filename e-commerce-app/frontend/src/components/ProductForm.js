import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/products", {
        name,
        price,
        description,
        image,
        category,
      })
      .then((response) => alert("Product added!"))
      .catch((error) => console.error(error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white border border-gray-300 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        required
      ></textarea>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md"
      >
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
