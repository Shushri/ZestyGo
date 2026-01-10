import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";


const PlaceOrder = () => {
  const {
    getTotalCartAmount,
    token,
    food_list,
    cartItems,
    url,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  // Form state
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  // Input change handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // useEffect(()=>{
  //   console.log(data)
  // },[data])

  // Calculate totals
  const subtotal = getTotalCartAmount();
  const deliveryCharges = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryCharges;

  // Submit order
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert cart into order items
    const orderItems = [];

    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        orderItems.push({
          foodId: item._id,
          name: item.name,
          price: item.price,
          quantity: cartItems[item._id],
        });
      }
    });
    // console.log( orderItems)

    const orderData = {
      address: data,
      items: orderItems,
      amount: total,
    };

    try {
  const response = await axios.post(
    url + "/api/order/place",
    orderData,
    { headers: { token } }
  );

  if (response.data.success && response.data.session_url) {
    window.location.replace(response.data.session_url);
  } else {
    alert(response.data.message || "Payment session not created");
  }
} catch (err) {
  alert("Server error");
}

};

  useEffect(()=>{
    if(!token){
      navigate('/cart');
    }
    
  },[token]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-24 max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md grid md:grid-cols-2 gap-10"
    >
      {/* Left Side - Delivery Info */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Delivery Information
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            value={data.firstName}
            onChange={onChangeHandler}
            placeholder="First Name"
            className="border px-3 py-2 rounded"
            required
          />
          <input
            name="lastName"
            value={data.lastName}
            onChange={onChangeHandler}
            placeholder="Last Name"
            className="border px-3 py-2 rounded"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          value={data.email}
          onChange={onChangeHandler}
          placeholder="Email"
          className="border px-3 py-2 rounded w-full"
          required
        />

        <input
          name="street"
          value={data.street}
          onChange={onChangeHandler}
          placeholder="Street"
          className="border px-3 py-2 rounded w-full"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            name="city"
            value={data.city}
            onChange={onChangeHandler}
            placeholder="City"
            className="border px-3 py-2 rounded"
            required
          />
          <input
            name="state"
            value={data.state}
            onChange={onChangeHandler}
            placeholder="State"
            className="border px-3 py-2 rounded"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="zipcode"
            value={data.zipcode}
            onChange={onChangeHandler}
            placeholder="Zipcode"
            className="border px-3 py-2 rounded"
            required
          />
          <input
            name="country"
            value={data.country}
            onChange={onChangeHandler}
            placeholder="Country"
            className="border px-3 py-2 rounded"
            required
          />
        </div>

        <input
          name="phone"
          value={data.phone}
          onChange={onChangeHandler}
          placeholder="Phone"
          className="border px-3 py-2 rounded w-full"
          required
        />
      </div>

      {/* Right Side - Cart Totals */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-fit">
        <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>

        <div className="flex justify-between mb-2">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>

        <div className="flex justify-between mb-2">
          <p>Delivery</p>
          <p>${deliveryCharges.toFixed(2)}</p>
        </div>

        <div className="flex justify-between font-bold border-t pt-2">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>

        <button
          type="submit"
          disabled={subtotal === 0}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 disabled:opacity-50"
        >
          Place Order
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
