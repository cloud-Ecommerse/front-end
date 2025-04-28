import React, { useState } from "react";
// Changed the import path from absolute to relative
import tshirt from "../assets/tsirt.png";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("brown");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const colors = ["brown", "green", "purple"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 max-w-5xl mx-auto">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={tshirt}
          alt="One Life Graphic T-Shirt"
          className="rounded-lg w-80 object-cover"
        />
      </div>

      {/* Info */}
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold">ONE LIFE GRAPHIC T-SHIRT</h2>
        <div className="flex items-center space-x-2 text-yellow-500">
          <div className="flex text-lg">
            {"★".repeat(4)}<span className="text-gray-300">★</span>
          </div>
          <span className="text-sm text-gray-500">4.5/5</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-gray-900">$260</span>
          <span className="text-lg line-through text-gray-400">$300</span>
          <span className="text-red-500 font-semibold">-40%</span>
        </div>

        {/* Description */}
        <p className="text-gray-600">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>

        {/* Colors */}
        <div>
          <span className="block font-medium mb-1">Select Colors</span>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <span className="block font-medium mb-1">Choose Size</span>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 rounded-lg border ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-3 py-1 border rounded-md text-lg"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 border rounded-md text-lg"
            >
              +
            </button>
          </div>

          <button className="flex-1 ml-4 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;