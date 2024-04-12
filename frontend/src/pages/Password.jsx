import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const Password = () => {
  return (
    <>
      <div className="overflow-x-clip relative">
        <Header></Header>
        <div className="h-screen">
          <ToastContainer />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Password;
