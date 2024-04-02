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

const Home = () => {
  const navigate = useNavigate();
  const handleLIA = () => {
    navigate("/companies");
  };

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
        <section className="pt-16 px-4 gap-4 flex flex-col">
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
        <FromOffscreenSection direction={"left"}>
          <section className="flex flex-row px-4 pt-28 gap-3">
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
        </FromOffscreenSection>
        <FromOffscreenSection>
          <section className="px-4 pt-20 flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <div className="flex flex-col gap-3">
                <BulletPoint>Vill skapa nya kontakter</BulletPoint>
                <BulletPoint>
                  Letar efter praktikanter i enlighet med sina intressen och
                  färdigheter
                </BulletPoint>
              </div>
              <img
                className="object-contain h-44"
                src={eyesBook}
                alt="person peeking over a book"
              />
            </div>
            <BulletPoint>
              Ett tillfälle att synas inför potentiella framtida kollegor
            </BulletPoint>
          </section>
        </FromOffscreenSection>
        <section className="py-10 flex justify-center align-middle">
          <img
            className="animate-arrowUpDown"
            src={arrowPxDown}
            alt="pixelated arrow pointing down"
          />
        </section>
        <section className="px-4 flex flex-col gap-3">
          <div className="w-44 mb-3">
            <h4 className="text-4xl mb-3">STUDENT?</h4>
            Detta evenemang är för företag som:
          </div>
          <BulletPoint>
            Vill skapa nya kontakter relaterat till ditt kommande yrke
          </BulletPoint>
          <BulletPoint>
            Letar efter praktik i enlighet med sina intressen och färdigheter
          </BulletPoint>
          <BulletPoint>
            Vill ta det första steget mot en framgångsrik karriär
          </BulletPoint>
        </section>
        <section className="px-4 pt-36 flex flex-row gap-3">
          <img
            className="w-32"
            src={studentLaptop}
            alt="happy student with laptop"
          />
          <div>
            <p>NÄR & VAR?</p>
            <p>Datum: 24 april 2024</p>
            <p>Tid: 15:00-19:00</p>
            <p>Plats: Lärdomsgatan 3, 417 56 Göteborg</p>
          </div>
        </section>
        <RedButton path="/signup">Skapa en användare</RedButton>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
