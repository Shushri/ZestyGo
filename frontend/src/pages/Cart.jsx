import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext"; // Global store for cart & food data
import { useNavigate } from "react-router-dom";          // Navigation hook

const Cart = () => {
  // Access required data and functions from context
  const {
    food_list,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    url,
  } = useContext(StoreContext);

  const navigate = useNavigate(); // Used to move to order page

  // Calculate cart totals
  const subtotal = getTotalCartAmount();
  const deliveryCharges = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryCharges;

  return (
    <div className="mt-24 max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      
      {/* Cart table header (hidden on small screens) */}
      <div className="hidden md:grid grid-cols-6 gap-4 font-semibold text-gray-700 border-b-2 pb-2">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart items list */}
      {food_list.map((item) => {
        // Show only items that exist in cart
        if (cartItems[item._id] > 0) {
          return (
            <div
              key={item._id}
              className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center py-4 border-b hover:bg-gray-50 transition-all duration-200"
            >
              {/* Item image */}
              <img
                className="w-20 h-20 object-cover rounded-md mx-auto md:mx-0"
                src={`${url}/images/${item.image}`} // Image from backend
                alt={item.name}
              />

              {/* Item name */}
              <p className="text-gray-800 font-medium text-center md:text-left">
                {item.name}
              </p>

              {/* Item price */}
              <p className="text-gray-600 text-center md:text-left">
                ₹{item.price.toFixed(2)}
              </p>

              {/* Item quantity */}
              <p className="text-gray-800 text-center md:text-left">
                {cartItems[item._id]}
              </p>

              {/* Total price for this item */}
              <p className="text-gray-800 font-semibold text-center md:text-left">
                ₹{(item.price * cartItems[item._id]).toFixed(2)}
              </p>

              {/* Remove item button */}
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:text-white hover:bg-red-500 px-3 py-1 rounded transition-all duration-200 mx-auto md:mx-0"
              >
                X
              </button>
            </div>
          );
        }
        return null;
      })}

      {/* Message shown when cart is empty */}
      {subtotal === 0 && (
        <p className="text-center text-gray-500 mt-6">
          Your cart is empty!
        </p>
      )}

      {/* Cart totals and promo section */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        
        {/* Cart totals summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>

          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Subtotal</p>
            <p className="font-medium">₹{subtotal.toFixed(2)}</p>
          </div>

          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Delivery Charges</p>
            <p className="font-medium">₹{deliveryCharges.toFixed(2)}</p>
          </div>

          <div className="flex justify-between mt-4 pt-2 border-t font-semibold text-gray-800 text-lg">
            <p>Total</p>
            <p>₹{total.toFixed(2)}</p>
          </div>

          {/* Checkout button */}
          {subtotal > 0 && (
            <button
              onClick={() => navigate("/order")}
              className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-all duration-200"
            >
              Proceed to Checkout
            </button>
          )}
        </div>

        {/* Promo code section (UI only) */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Promo Code</h3>
          <p className="text-gray-700 mb-2">
            If you have a promo code, enter it here:
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all duration-200">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
