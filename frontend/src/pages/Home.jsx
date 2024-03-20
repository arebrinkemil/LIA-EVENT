import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home_page">
        <h1>THIS IS A HOME PAGE EVERYONE CAN ACCESS</h1>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
