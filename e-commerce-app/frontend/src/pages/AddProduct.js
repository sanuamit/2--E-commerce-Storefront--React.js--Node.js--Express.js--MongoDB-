import React from "react";
import ProductForm from "../components/ProductForm";

function AddProduct() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <ProductForm />
    </div>
  );
}

export default AddProduct;
