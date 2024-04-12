// RequestOTP.js
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RequestOTP = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5555/forgotPassword", { email });
      toast.success("OTP has been sent to your email.");
      onEmailSubmit(email); // Callback function to notify the parent component
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
};

export default RequestOTP;
