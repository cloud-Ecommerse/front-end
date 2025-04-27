import React from "react";
import { Trash2 } from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "/src/assets/tsirt.png",
  },
  {
    id: 2,  
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "/src/assets/jean.png",
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image: "/src/assets/dress.png",
  },
];

export default function Cart() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = subtotal * 0.2;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 py-8 px-8">
      {/* Left - Cart Items */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4 ">YOUR CART</h2>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm"
            >
              <div className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Size: {item.size} <br />
                    Color: {item.color}
                  </p>
                  <p className="mt-1 font-semibold">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                  <button className="px-2">-</button>
                  <span className="px-2">1</span>
                  <button className="px-2">+</button>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Summary */}
      <div className="bg-white rounded-xl shadow-sm p-6 h-fit ">
        <h3 className="text-lg font-bold mb-4 ">Order Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium">${subtotal}</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Discount (-20%)</span>
            <span>-${discount.toFixed(0)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>${delivery}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        {/* Promo Code */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full px-3 py-2 border rounded-full text-sm"
          />
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Apply
          </button>
        </div>

        {/* Checkout */}
        <button className="w-full bg-black text-white rounded-full mt-4 py-3 font-semibold flex justify-center items-center gap-2">
          Go to Checkout →
        </button>
      </div>
    </div>
  );
}
