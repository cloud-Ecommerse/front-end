import React, { useEffect, useState } from "react";

function Top_selling() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from Strapi
    const fetchProducts = async () => {
      const apiUrl = "http://3.214.91.27:1337"; // Your Elastic IP
      const response = await fetch(`${apiUrl}/api/products`);
      const data = await response.json();
      
      // Set the fetched products to state
      setProducts(data.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Top Selling Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.attributes.productName}</h2>
            <p>{product.attributes.price}</p>
            <p>Rating: {product.attributes.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Top_selling;
