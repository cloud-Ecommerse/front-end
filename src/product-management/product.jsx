import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1337/api/products')
      .then(response => {
        setProducts(response.data.data); // Save the product data in state
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error); // Log the error for debugging
        setError(error.message); // Handle error
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.attributes.Name}</h2>
            <p>{product.attributes.Hello}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
