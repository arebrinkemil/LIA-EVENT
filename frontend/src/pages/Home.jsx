import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header.jsx";
import RedButton from "../components/RedButton.jsx";
import WhiteButton from "../components/WhiteButton.jsx";
import HorizontalLine from "../components/HorizontalLine.jsx";
import FromOffscreenSection from "../components/FromOffscreenSection.jsx";
import asterisk from "../assets/icons/asterisk-black.svg";
import arrowDown from "../assets/icons/arrow_downward.svg";
import studentLaptop from "../assets/photos/student-w-laptop-square.png";

import arrowPxDown from "../assets/icons/arrow-pixel-down.svg";
import Footer from "../components/Footer.jsx";
import BulletPoint from "../components/BulletPoint.jsx";
import EventInfoSection from "../components/homepage/EventInfoSection.jsx";
import WhatIsIt from "../components/homepage/WhatIsIt.jsx";
import ForWho from "../components/homepage/ForWho.jsx";
import Bullets from "../components/homepage/Bullets.jsx";
import Student from "../components/homepage/Student.jsx";
import Location from "../components/homepage/Location.jsx";
import ScrollBanner from "../components/homepage/ScrollBanner.jsx";
import Banner from "../components/homepage/Banner.jsx";
import studentsPaper from "../assets/photos/students-w-paper.png";
import eyes from "../assets/photos/eyes-over-book.png";

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
      <div className="md:hidden home_page overflow-x-clip">
        <Header></Header>
        <ScrollBanner />
        <Banner />
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

      <div className="hidden md:block home_page overflow-x-clip">
        <Header></Header>
        <ScrollBanner />
        <div className="px-20">
          <Banner />
          <div className="flex flex-row gap-6 mt-28">
            {/* left column */}
            <div className="flex flex-col w-1/2">
              <div className="flex flex-col h-[120vh] justify-between">
                <FromOffscreenSection direction={"left"}>
                  <img
                    className="object-cover w-full"
                    src={studentsPaper}
                    alt="students with a paper"
                  />
                </FromOffscreenSection>
                <FromOffscreenSection direction={"left"}>
                  <div className="flex flex-col">
                    <h2 className="bg-black responsive-heading text-white px-2">
                      FÖR VEM?
                    </h2>
                    <h3 className="bg-red text-white">
                      Evenemang för företag som:
                    </h3>
                    <div className="flex flex-col gap-6 mt-6">
                      <BulletPoint>
                        <p>Vill skapa nya kontakter</p>
                      </BulletPoint>
                      <BulletPoint>
                        <p>
                          Letar efter praktikanter i enlighet med sina intressen
                          och färdigheter
                        </p>
                      </BulletPoint>
                      <BulletPoint>
                        <p>
                          Ett tillfälle att synas inför potentiella framtida
                          kollegor
                        </p>
                      </BulletPoint>
                    </div>
                  </div>
                </FromOffscreenSection>
              </div>
              <div className="flex flex-col h-fit justify-between">
                <FromOffscreenSection direction={"left"} className="basis-1/2">
                  <div className="w-full h-[50vh] flex justify-center items-center">
                    <img
                      className="object-fit inherit animate-arrowUpDown "
                      src={arrowDown}
                      alt="arrow pointing down"
                    />
                  </div>
                </FromOffscreenSection>
              </div>
            </div>

            {/* right collumn */}
            <div className="flex flex-col w-1/2">
              <div className="flex flex-col h-[120vh] justify-between">
                <FromOffscreenSection direction={"right"}>
                  <div>
                    <h2 className="bg-black responsive-heading text-white px-2">
                      VAD ÄR DET?
                    </h2>
                    <p className="text-xl w-4/5">
                      LIA utan gränser – ett evenemang som hjälper studenter att
                      hitta den perfekta praktiken. På detta evenemang kan
                      studenter:
                    </p>
                  </div>
                </FromOffscreenSection>

                <FromOffscreenSection direction={"right"}>
                  <img
                    className="object-cover w-full"
                    src={eyes}
                    alt="students with a paper"
                  />
                </FromOffscreenSection>
              </div>
              <div className="flex flex-col h-[50vh] justify-between">
                <FromOffscreenSection
                  direction={"right"}
                  className="basis-1/2 h-full"
                >
                  <section className=" mt-28 flex flex-col gap">
                    <div className=" bg-black flex justify-start items-center text-center">
                      <h1 className="responsive-heading text-white px-2">
                        STUDENT?
                      </h1>
                    </div>
                    <div className="">
                      <span className="text-2xl px-1 w-auto bg-red text-white line-clamp-1 inline-block ">
                        Evenemang för studenter som:
                      </span>
                    </div>

                    <div className="flex flex-col gap-6 mt-6 ">
                      <BulletPoint>
                        Vill skapa nya kontakter relaterat till ditt kommande
                        yrke
                      </BulletPoint>
                      <BulletPoint>
                        Letar efter praktik i enlighet med sina intressen och
                        färdigheter
                      </BulletPoint>
                      <BulletPoint>
                        Vill ta det första steget mot en framgångsrik karriär
                      </BulletPoint>
                    </div>
                  </section>
                </FromOffscreenSection>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col justify-between basis-1/2">
              <FromOffscreenSection direction={"left"} className="h-full">
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <h2 className="bg-black responsive-heading text-white px-2">
                      NÄR & VAR?
                    </h2>
                    <section className=" flex flex-col   justify-between ">
                      <div>
                        <p className="bg-red w-fit text-white">Datum:</p>
                        <p>24 April 2025</p>
                      </div>
                      <div>
                        <p className="bg-red w-fit text-white">Tid:</p>
                        <p>15:00-19:00</p>
                      </div>
                      <div>
                        <p className="bg-red w-fit text-white">Plats:</p>
                        <p>Lärdomsgatan 3, 417 56 Göteborg</p>
                      </div>
                    </section>
                  </div>
                  <RedButton width="" path={"/profile"}>
                    Registrera er här
                  </RedButton>
                </div>
              </FromOffscreenSection>
            </div>

            <div className="flex flex-col justify-between basis-1/2">
              <FromOffscreenSection
                direction={"right"}
                className="basis-1/2 h-full "
              >
                <img
                  className="h-full object-cover object-center"
                  src={studentLaptop}
                  alt="students with laptops"
                />
              </FromOffscreenSection>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
