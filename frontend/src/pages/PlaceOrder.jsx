import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  // Calculate totals
  const subtotal = getTotalCartAmount();
  const deliveryCharges = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryCharges;

  return (
    <div className="mt-24 max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md grid md:grid-cols-2 gap-10">
      
      {/* Left Side - Delivery Info */}
      <form className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Delivery Information
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
        />

        <input
          type="text"
          placeholder="Street"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Zip code"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Phone"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
        />
      </form>

      {/* Right Side - Cart Totals */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-fit">
        <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>
        <div className="flex justify-between mb-2">
          <p className="text-gray-700">Subtotal</p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-700">Delivery Charges</p>
          <p className="font-medium">${deliveryCharges.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mt-4 pt-2 border-t font-semibold text-gray-800 text-lg">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>

        {subtotal > 0 ? (
          <button
            type="submit"
            className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-all duration-200"
          >
            Proceed to Payment
          </button>
        ) : (
          <p className="text-gray-500 mt-6 text-center">
            Add items to your cart before proceeding.
          </p>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
