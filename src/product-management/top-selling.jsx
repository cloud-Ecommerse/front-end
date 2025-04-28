import React from "react";
import tshirtImage from "../assets/s.png";
import jeanImage from "../assets/jean.png";
import dressImage from "../assets/dress.png";
import jacketImage from "../assets/jacket.png";

function Top_selling() {
  const products = [
    {
      id: 1,
      name: "T-SHIRT WITH TAPE DETAILS",
      price: "$5",
      image: tshirtImage,
      rating: 5.0,
    },
    {
      id: 2,
      name: "Jean",
      price: "$15",
      image: jeanImage,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Taylor Linen Dress",
      price: "$22",
      image: dressImage,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Jacket",
      price: "$30",
      image: jacketImage,
      rating: 4.9,
    },
  ];

  return (
    <div>
      <h1>Top Selling Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>Rating: {product.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Top_selling;