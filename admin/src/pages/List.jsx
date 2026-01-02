import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch list");
      }
    } catch {
      toast.error("Server error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: foodId,
      });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error deleting food");
      }
    } catch {
      toast.error("Server error");
    }
  };

  return (
    <div className="p-6">
      <p className="text-2xl font-semibold mb-4">All Food Items</p>

      {/* Header */}
      <div className="grid grid-cols-5 gap-4 bg-gray-100 p-3 rounded font-medium text-gray-700">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p className="text-center">Action</p>
      </div>

      {/* Rows */}
      <div className="space-y-3 mt-3">
        {list.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-5 gap-4 items-center bg-white shadow-sm p-3 rounded hover:bg-gray-50"
          >
            <img
              src={`${url}/images/${item.image}`}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />

            <p className="font-medium">{item.name}</p>

            <p className="text-gray-600">{item.category}</p>

            <p className="font-semibold text-green-600">₹{item.price}</p>

            {/* Action */}
            <p
              onClick={() => removeFood(item._id)}
              className="text-red-500 font-bold text-center cursor-pointer hover:text-red-700 transition"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
