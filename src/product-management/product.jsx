import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1337/api/products')
      .then(response => {
        if (response.data && response.data.data) {
          setProducts(response.data.data);
        } else {
          setError('Invalid response format');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error.message || 'Failed to fetch products');
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
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.attributes.Name || 'Unnamed Product'}</h2>
              <p>{product.attributes.Description || 'No description available'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;