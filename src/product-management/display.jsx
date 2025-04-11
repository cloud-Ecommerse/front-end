import React from "react";

function Display() {
  const products = [
    {
      id: 1,
      name: "T-SHIRT WITH TAPE DETAILS",
      price: "$5",
      image: "/src/assets/tsirt.png",
      rating: 5.0,
    },
    {
      id: 2,
      name: "Work Trouser ",
      price: "$15",
      image: "/src/assets/trosure.png",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Taylor Linen Dress ",
      price: "$22",
      image: "/src/assets/dress.png",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Taylor Linen Dress ",
      price: "$22",
      image: "/src/assets/dress.png",
      rating: 4.5,
    }
  ];

  return (
    
    <div className="w-full min-h-screen bg-white-100">
      {/* New Arrivals */}
      <section className="mx-auto  py-8 px-8 ">
        <h2 className="text-3xl font-bold text-center mb-5">New Arrivals</h2>
        <div className="flex grid-cols-4 justify-center gap-8">
          {products.map((product) => (
            <div data-aos="zoom-in"
              key={product.id}
              className="w-85 bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
            >
              <img
                className="w-full h-75 object-cover rounded-xl"
                src={product.image}
                alt={product.name}
              />
              <h5 className="text-xl font-semibold mt-4">{product.name}</h5>
              <div className="flex items-center my-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm">
                  {product.rating}
                </span>
              </div>
              <div className="flex items-center justify-between">
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

export default Display;
