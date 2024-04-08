import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header.jsx";
import RedButton from "../components/RedButton.jsx";
import WhiteButton from "../components/WhiteButton.jsx";
import HorizontalLine from "../components/HorizontalLine.jsx";
import FromOffscreenSection from "../components/FromOffscreenSection.jsx";
import asterisk from "../assets/icons/asterisk-black.svg";

import arrowPxDown from "../assets/icons/arrow-pixel-down.svg";
import Footer from "../components/Footer.jsx";

import EventInfoSection from "../components/homepage/EventInfoSection.jsx";
import WhatIsIt from "../components/homepage/WhatIsIt.jsx";
import ForWho from "../components/homepage/ForWho.jsx";
import Bullets from "../components/homepage/Bullets.jsx";
import Student from "../components/homepage/Student.jsx";
import Location from "../components/homepage/Location.jsx";
import ScrollBanner from "../components/homepage/ScrollBanner.jsx";

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
        <ScrollBanner />
        {/* <button
          className="p-4 text-4xl font-normal border-solid border-b-2 border-black w-full flex flex-row justify-between align-baseline"
          onClick={handleLIA}
        >
          VILKA KOMMER?
          <img src={arrowRU} alt="arrow right up" />
        </button> */}
        <section className="p-4 text-8xl flex flex-row justify-between">
          LIA &
          <img src={asterisk} alt="asterisk icon" />
        </section>
        <span className="p-4 text-8xl font-bold text-right flex flex-row justify-end">
          YRGO
        </span>
        <EventInfoSection />
        <div className="mb-2 mt-20">
          <RedButton path={"/profile"}>Vi kommer</RedButton>
        </div>
        <div className="my-2">
          <WhiteButton className="my-1" path={"/companies"}>
            Vilka kommer?
          </WhiteButton>
        </div>
        <HorizontalLine></HorizontalLine>
        <WhatIsIt />
        <FromOffscreenSection direction={"left"}>
          <ForWho />
        </FromOffscreenSection>
        <FromOffscreenSection>
          <Bullets />
        </FromOffscreenSection>
        <Student />{" "}
        <section className="py-10 flex justify-center align-middle">
          <img
            className="animate-arrowUpDown"
            src={arrowPxDown}
            alt="pixelated arrow pointing down"
          />
        </section>
        <Location />
        <RedButton path="/signup">Skapa en användare</RedButton>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
