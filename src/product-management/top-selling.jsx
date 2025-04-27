import React from "react";
import tshirtImage from "/src/assets/s.png";
import jeanImage from "/src/assets/jean.png";
import dressImage from "/src/assets/dress.png";
import jacketImage from "/src/assets/jacket.png";

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
      rating: 4.5,
    },
    {
      id: 4,
      name: "Winter Jacket",
      price: "$22",
      image: jacketImage,
      rating: 4.5,
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white-100">
      <section className="mx-auto py-8 px-8">
        <h2 className="text-3xl font-bold text-center mb-5">Top Selling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {products.map((product) => (
            <div 
              key={product.id}
              data-aos="flip-up"
              className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
            >
              <img
                className="w-full h-64 object-cover rounded-xl"
                src={product.image}
                alt={product.name}
              />
              <h5 className="text-xl font-semibold mt-4">{product.name}</h5>
              <div className="flex items-center my-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm">
                  {product.rating}
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold">{product.price}</span>
                <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Top_selling;
