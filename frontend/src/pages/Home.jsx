import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header.jsx";
import RedButton from "../components/RedButton.jsx";
import HorizontalLine from "../components/HorizontalLine.jsx";
import BulletPoint from "../components/BulletPoint.jsx";
import FromOffscreenSection from "../components/FromOffscreenSection.jsx";
import arrowRU from "../assets/icons/arrow-right-up.svg";
import asterisk from "../assets/icons/asterisk-black.svg";
import studentsLaptops from "../assets/photos/students-w-laptops.png";
import studentsPaper from "../assets/photos/students-w-paper.png";
import eyesBook from "../assets/photos/eyes-over-book.png";
import studentLaptop from "../assets/photos/student-w-laptop.png";
import arrowPxDown from "../assets/icons/arrow-pixel-down.svg";
import Footer from "../components/Footer.jsx";

import EventInfoSection from "../components/homepage/EventInfoSection.jsx";
import WhatIsIt from "../components/homepage/WhatIsIt.jsx";
import ForWho from "../components/homepage/ForWho.jsx";
import Bullets from "../components/homepage/Bullets.jsx";
import Student from "../components/homepage/Student.jsx";
import Location from "../components/homepage/Location.jsx";

const Home = () => {
  const navigate = useNavigate();
  const handleLIA = () => {
    navigate("/companies");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="home_page overflow-x-clip">
        <Header></Header>
        <button
          className="p-4 text-4xl font-normal border-solid border-b-2 border-black w-full flex flex-row justify-between align-baseline"
          onClick={handleLIA}
        >
          VILKA KOMMER?
          <img src={arrowRU} alt="arrow right up" />
        </button>
        <section className="p-4 text-8xl flex flex-row justify-between">
          LIA &
          <img src={asterisk} alt="asterisk icon" />
        </section>
        <span className="p-4 text-8xl font-bold text-right flex flex-row justify-end">
          YRGO
        </span>
        <EventInfoSection />
        <RedButton path={"/profile"}>Vi kommer</RedButton>
        <HorizontalLine></HorizontalLine>
        <WhatIsIt />
        <FromOffscreenSection direction={"left"}>
          <ForWho />
        </FromOffscreenSection>
        <FromOffscreenSection>
          <Bullets />
        </FromOffscreenSection>
        <section className="py-10 flex justify-center align-middle">
          <img
            className="animate-arrowUpDown"
            src={arrowPxDown}
            alt="pixelated arrow pointing down"
          />
        </section>
        <Student />
        <Location />
        <RedButton path="/signup">Skapa en användare</RedButton>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
