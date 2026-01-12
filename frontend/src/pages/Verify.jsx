import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {url} = useContext(StoreContext);

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (!success || !orderId) return;

    const verify = async () => {
      try {
        const res = await axios.post(`${url}/api/order/verify`, {
          success,
          orderId,
        });

        if (res.data.success) {
          setTimeout(() => {
            navigate("/myorders");
          }, 2000);
        } else {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        navigate("/");
      }
    };

    verify();
  }, [success, orderId]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <div className="bg-white p-10 rounded-xl shadow-xl flex flex-col items-center">
        <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-6"></div>
        <h2 className="text-xl font-semibold">Verifying Payment</h2>
        <p className="text-gray-500 mt-2 text-center">
          Please wait while we confirm your payment...
        </p>
      </div>
    </div>
  );
};

export default Verify;
