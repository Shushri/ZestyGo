# ZestyGo – Food Ordering Web Application

## Description

ZestyGo is a full-stack food ordering web application that allows users to browse food items, manage their cart, place orders, and make secure online payments using Stripe.  
The project is built with a modern frontend and a robust backend, designed for scalability and community contributions.

---

## Features

- ✅ User authentication and authorization  
- ✅ Browse food items with categories  
- ✅ Add to cart / remove from cart  
- ✅ Secure online payments using Stripe  
- ✅ Order placement and order history
- ✅ Track order status
- ✅ Responsive and modern UI  

---

## Live Demo
https://zestygo-frontend.onrender.com/

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB

### Payments
- Stripe Payment Gateway

---

## Installation

### **Clone the repository**
```bash
git clone https://github.com/shushri/zestygo.git
cd zestygo
```
### **Install dependencies**
```
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install

```

### **Set up environment variables**

Create a .env file in the root directory:
```
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=jwt_secret_key
```

### **Start the server**
```
cd ../backend
node server.js
```

### **Start the frontend**
```
cd ../frontend
npm run dev
```
### **Start the admin**
```
cd ../admin
npm run dev
```
---

