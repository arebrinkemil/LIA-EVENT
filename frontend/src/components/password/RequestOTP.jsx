// RequestOTP.js
import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

const RequestOTP = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://liaevent.arebr.ink/api/forgotPassword", {
        email,
      });
      enqueueSnackbar("OTP has been sent to your email.", {
        variant: "success",
      });

      onEmailSubmit(email);
    } catch (error) {
      enqueueSnackbar(error.response?.data?.message || "An error occurred.", {
        variant: "error",
      });
    }
  };

  return (
    <div className=" w-full lg:w-1/2 flex flex-col px-10 lg:px-0 max-w-7xl">
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold">
          Behöver du återställa ditt lösenord?
        </h2>
        <p>Ange din e-postadress nedan.</p>
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input mt-4"
          placeholder="E-postadress"
        />
        <button
          type="submit"
          className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl p-3 w-full mt-8"
        >
          Skicka
        </button>
        <p>
          Vi skickar en kod till dig. Använd den för att skapa ett nytt
          lösenord. Koden är giltig i 10 minuter.
        </p>
      </form>
    </div>
  );
};

export default RequestOTP;
