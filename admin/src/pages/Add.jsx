import React, { useState } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";


const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setdata] = useState(
    {name:"",
    description:"",
    category:"Salad",
    price:""
}  )
    const OnChangeHandler = (e) => {
        const name=e.target.name;
        const value=e.target.value;
        setdata((data)=>({...data,[name]:value}))
    }

   
    const url="http://localhost:4000"
    const OnSubmitHandler = async (e) => {
        e.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image",image);
        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
          setdata(
            {
              name:"",
              description:"",
              category:"Salad",
              price:""

            }
          );
          setImage(false);
          toast.success(response.data.message);
        }
        else{
          toast.error(response.data.message);
        }

    }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Add New Product</h2>

      <form className="space-y-6" onSubmit={OnSubmitHandler}>
        {/* IMAGE UPLOAD */}
        <div>
          <p className="font-medium mb-2">Upload Image</p>
          <label
            htmlFor="image"
            className="inline-block cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-orange-500 transition"
          >
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
              className="w-32 h-32 object-contain"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* PRODUCT NAME */}
        <div>
          <p className="font-medium mb-1">Product Name</p>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={OnChangeHandler}
            placeholder="Enter product name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <p className="font-medium mb-1">Product Description</p>
          <textarea
            name="description"
            value={data.description}
            onChange={OnChangeHandler}
            rows="5"
            placeholder="Write product description here..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* CATEGORY & PRICE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="font-medium mb-1">Product Category</p>
            <select
              name="category"
            value={data.category}
            onChange={OnChangeHandler}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option>Salad</option>
              <option>Rolls</option>
              <option>Desserts</option>
              <option>Sandwich</option>
              <option>Cake</option>
              <option>Pure Veg</option>
              <option>Pasta</option>
              <option>Noodles</option>
            </select>
          </div>

          <div>
            <p className="font-medium mb-1">Product Price</p>
            <input
              type="number"
              name="price"
              value={data.price}
            onChange={OnChangeHandler}
              placeholder="₹ 200"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
