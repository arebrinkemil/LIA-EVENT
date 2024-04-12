// PasswordPage.js
import React, { useState } from "react";
import RequestOTP from "../components/password/RequestOTP";
import ResetPassword from "../components/password/ResetPasswordForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordPage = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleEmailSubmit = (email) => {
    setUserEmail(email);
    setEmailSubmitted(true);
  };

  return (
    <>
      <div className="overflow-x-clip relative">
        <Header />
        <div className="min-h-[90vh] flex justify-center items-center">
          <ToastContainer />
          {!emailSubmitted ? (
            <RequestOTP onEmailSubmit={handleEmailSubmit} />
          ) : (
            <ResetPassword email={userEmail} />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PasswordPage;
