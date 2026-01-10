import React, { useEffect, useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import box from "../assets/parcel_icon.png";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/userorders`,
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="px-6 md:px-16 py-10 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

      <div className="space-y-4">
        {data.map((order, index) => (
          <div
            key={index}
            className="bg-white border rounded-md p-5 flex items-center justify-between shadow-sm"
          >
            {/* Left icon */}
            <div className="flex items-center gap-4 w-2/5">
              <img src={box} alt="" className="w-10" />
              <p className="text-gray-700 text-sm line-clamp-2">
                {order.items
                  .map(
                    (item) => `${item.name} x ${item.quantity}`
                  )
                  .join(", ")}
              </p>
            </div>

            {/* Price */}
            <p className="w-1/6 text-gray-700 font-medium">
              ₹{order.amount}
            </p>

            {/* Items */}
            <p className="w-1/6 text-gray-500">
              Items: {order.items.length}
            </p>

            {/* Status */}
            <div className="w-1/6 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <p className="text-sm text-gray-600">
                {order.status}
              </p>
            </div>

            {/* Button */}
            <button onClick={fetchOrders} className="bg-red-50 text-red-500 px-4 py-2 rounded hover:bg-red-100 transition">
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
