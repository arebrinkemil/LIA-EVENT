import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header.jsx";
import arrowRU from "../assets/icons/arrow-right-up.svg";
import asterisk from "../assets/icons/asterisk-black.svg";

const Home = () => {
  const navigate = useNavigate();
  const handleLIA = () => {
    navigate("/companies");
  };

  return (
    <>
      <div className="home_page">
        <Header></Header>
        <button
          className="p-4 text-4xl font-normal border-solid border-b-2 border-black w-full flex flex-row justify-between align-baseline"
          onClick={handleLIA}
        >
          VILKA KOMMER?
          <img src={arrowRU} alt="arrow right up" />
        </button>
        <span className="p-4 text-8xl flex flex-row justify-between">
          LIA &
          <img src={asterisk} alt="asterisk icon" />
        </span>
        <span className="p-4 text-8xl font-bold text-right flex flex-row justify-end">
          YRGO
        </span>
        <span>
          <div>
            <div>24 APRIL</div>
            <div>MEETUP</div>
          </div>
        </span>
        <h1>THIS IS A HOME PAGE EVERYONE CAN ACCESS</h1>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
