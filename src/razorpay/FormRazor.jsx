import axios from "axios";
import React, { useState } from "react";

const FormRazor = () => {
  const [coin, setCoin] = useState(1);
  const [currency, setCurrency] = useState("Select One");

  const checkoutHandler = async (e) => {
    e.preventDefault();
    console.log("currency", currency);
    const {
      data: { key },
    } = await axios.get("/api/razorpay/key");

    const {
      data: { order },
    } = await axios.post("/api/razorpay/pay", {
      coin,
      currency_code: currency,
    });

    console.log(order);

    const options = {
      key,
      amount: order.amount,
      currency: order.currency,
      name: order.name,
      description: order.description,
      order_id: order.id,
      callback_url: "/api/razorpay/verify",
      prefill: {
        // Logged in user details
        name: "Rafay",
        email: "rafay.siddiqui106@gmail.com",
        contact: "7073830060",
      },
      notes: { address: "some address" },
      theme: { color: "#3399cc" },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <div>
      <h3>Razor Pay</h3>
      <form onSubmit={checkoutHandler}>
        <p>
          Coin:
          <input
            type="text"
            name="coin"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
          />
        </p>
        <p>
          Currency:{" "}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="Select One">Select One</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  );
};

export default FormRazor;
