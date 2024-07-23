import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Product Listings</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
