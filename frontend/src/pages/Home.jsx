import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header.jsx";
import RedButton from "../components/RedButton.jsx";
import HorizontalLine from "../components/HorizontalLine.jsx";
import BulletPoint from "../components/BulletPoint.jsx";
import arrowRU from "../assets/icons/arrow-right-up.svg";
import asterisk from "../assets/icons/asterisk-black.svg";
import studentsLaptops from "../assets/photos/students-w-laptops.png";
import studentsPaper from "../assets/photos/students-w-paper.png";

const Home = () => {
  const navigate = useNavigate();
  const handleLIA = () => {
    navigate("/companies");
  };

  return (
    <>
      <div className="home_page w-screen overflow-hidden">
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
        <section className="px-4 flex flex-row justify-between align-middle items-center">
          <div>
            <div>24 APRIL</div>
            <div>MEETUP</div>
          </div>
          <img
            className="object-contain h-36"
            src={studentsLaptops}
            alt="students with laptops"
          />
          2024
        </section>
        <RedButton path={"/signup"}>Vi kommer</RedButton>
        <HorizontalLine></HorizontalLine>
        <section className="pt-16 px-4">
          <h4 className="text-4xl mb-3">Vad är det?</h4>
          "LIA utan gränser" är ett evenemang som hjälper studenter att hitta
          den perfekta praktiken. På detta evenemang kan studenter:
          <BulletPoint>Presentera sig direkt för arbetsgivare</BulletPoint>
          <BulletPoint>
            Få information om de mest aktuella praktikplatserna
          </BulletPoint>
          <BulletPoint>Lär känna ledande företag i sin bransch</BulletPoint>
          <BulletPoint>
            Få värdefulla tips från experter på karriärutveckling
          </BulletPoint>
        </section>
        <section className="flex flex-row px-4 ">
          <img
            className="object-contain h-36"
            src={studentsPaper}
            alt="students with a paper"
          />
          <div>
            <h4 className="text-4xl mb-3">FÖR VEM?</h4>
            Detta evenemang är för företag som:
          </div>
        </section>
        <h1>THIS IS A HOME PAGE EVERYONE CAN ACCESS</h1>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
