// controllers/orderController.js
import Stripe from "stripe";
import orderModel from "../models/orderModel.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const placeOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const { items, amount, address } = req.body;

    const newOrder = await orderModel.create({
      userId,
      items,
      amount,
      address,
      status: "pending",
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",

      // 🔥 Redirect to Verify Page
      success_url: `http://localhost:5173/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `http://localhost:5173/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

export const verifyOrder = async (req, res) => {
  const { success, orderId } = req.body;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, {
        status: "paid",
        payment: true,
      });
      res.json({ success: true });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

export const userOrders = async(req,res)=>{
  try {
    const orders = await orderModel.find({userId:req.userId});
    res.json({success:true, data:orders})
  } catch (error) {
    console.log("Error")
    res.json({success:false, message:"Error"});
  }
}