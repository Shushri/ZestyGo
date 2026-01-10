import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import box from "../assets/parcel_icon.png";

const Orders = ({ url }) => {
  const [data, setData] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setData(response.data.data);
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  // change order status
  const updateStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: newStatus,
      });

      if (response.data.success) {
        toast.success("Order status updated");
        fetchAllOrders();
      } else {
        toast.error("Failed to update");
      }
    } catch {
      toast.error("Server error");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Orders</h2>

      {/* Table header */}
      <div className="grid grid-cols-5 bg-gray-100 p-4 rounded text-gray-600 font-medium">
        <p>Order</p>
        <p>Items</p>
        <p>Amount</p>
        <p>Payment</p>
        <p>Status</p>
      </div>

      <div className="space-y-3 mt-4">
        {data.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-5 bg-white p-4 rounded shadow-sm items-center"
          >
            {/* Order */}
            <div className="flex items-center gap-3">
              <img src={box} className="w-10" alt="" />
              <p className="font-medium text-sm">
                #{order._id.slice(-6)}
              </p>
            </div>

            {/* Items */}
            <p className="text-sm text-gray-600 line-clamp-2">
              {order.items
                .map((item) => `${item.name} x ${item.quantity}`)
                .join(", ")}
            </p>

            {/* Amount */}
            <p className="font-medium">₹{order.amount}</p>

            {/* Payment */}
            <p className="text-sm text-gray-500">
              {order.payment ? "Paid" : "COD"}
            </p>

            {/* Status dropdown */}
            <select
              value={order.status}
              onChange={(e) =>
                updateStatus(order._id, e.target.value)
              }
              className={`border px-3 py-2 rounded text-sm focus:outline-none
                ${
                  order.status === "Delivered"
                    ? "bg-green-50 text-green-700"
                    : order.status === "Out for delivery"
                    ? "bg-yellow-50 text-yellow-700"
                    : "bg-red-50 text-red-600"
                }
              `}
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
