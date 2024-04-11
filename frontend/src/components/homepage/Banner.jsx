import React from "react";
import RedButton from "../RedButton";
import WhiteButton from "../WhiteButton";
import EventInfoSection from "../homepage/EventInfoSection";
import asterisk from "../../assets/icons/asterisk-black.svg";
import studentsLaptops from "../../assets/photos/students-w-laptops.png";
import liaRotate from "../../assets/icons/find-lia-rotate.svg";

const Banner = () => {
  return (
    <>
      <div className="md:hidden">
        <section className="p-4 text-8xl flex flex-row justify-between">
          LIA &
          <img src={asterisk} alt="asterisk icon" />
        </section>
        <span className="p-4 text-8xl font-bold text-right flex flex-row justify-end">
          YRGO
        </span>
        <EventInfoSection />
        <div className="w-full px-4">
          <div className="mb-2 mt-20">
            <RedButton path={"/profile"} width={"100%"}>
              Registrera er här
            </RedButton>
          </div>
          <div className="my-2">
            <WhiteButton className="my-1" path={"/companies"} width={"100%"}>
              Vilka kommer?
            </WhiteButton>
          </div>
        </div>
      </div>

      <div className="hidden md:flex mt-[60px] h-[calc(100vh-170px)] flex-col">
        <div className="flex basis-1/3 ">
          <section className="bannerText flex flex-row align-bottom w-full">
            <div className="basis-1/2 w-full flex items-end justify-center">
              <h1> LIA &</h1>
            </div>
            <div className="basis-1/2 w-full flex justify-end">
              <img src={liaRotate} className=" animate-rotate" alt="lia icon" />
            </div>
          </section>
        </div>
        <div className="flex basis-2/3  flex-row">
          <div className="flex grow-0 basis-1/3 ">
            <img
              className="object-cover h-full w-full"
              src={studentsLaptops}
              alt="students with laptops"
            />
          </div>
          <div className="flex flex-col grow basis-2/3 ">
            <div className="flex basis-6/12 align-top grow">
              <h1 className="bannerText pl-10 font-bold noLineBanner">YRGO</h1>
            </div>
            <div className="flex grow basis-3/12 flex-col text-end text-4xl justify-center">
              <p>17:00-19:00</p>
              <p>24 APRIL MEETUP</p>
              <p>2024</p>
            </div>
            <div className="flex grow flex-row basis-3/12 gap-5 px-4">
              <div className="basis-1/2 flex flex-col justify-end">
                <RedButton width="" path={"/profile"}>
                  Registrera er här
                </RedButton>
              </div>
              <div className="basis-1/2 flex px-4 flex-col justify-end">
                <WhiteButton path={"/companies"}>Vilka kommer?</WhiteButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
