import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = ({ email }) => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Lösenorden matchar inte.");
      return;
    }

    try {
      await axios.post("http://localhost:5555/resetPassword", {
        email,
        otp,
        password,
      });
      toast.success("Lösenordet har återställts.");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Ett fel uppstod.");
    }
  };

  return (
    <div className=" w-full lg:w-1/2 flex flex-col px-10 lg:px-0 max-w-7xl">
      <p>Ange koden du fått via e-post och välj ett nytt lösenord.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="otp">Kod:</label>
        <input
          id="otp"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="form-input"
          placeholder="4 siffror"
        />
        <label htmlFor="newPassword">Nytt lösenord:</label>
        <input
          id="newPassword"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-input"
          placeholder="lösenord"
        />
        <label htmlFor="confirmNewPassword">Bekräfta nytt lösenord:</label>
        <input
          id="confirmNewPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="form-input"
          placeholder="bekräfta lösenord"
        />
        <button
          className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl p-3 w-full mt-8"
          type="submit"
        >
          Återställ lösenord
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
