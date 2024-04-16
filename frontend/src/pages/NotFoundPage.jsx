import React from "react";

import Header from "../components/Header.jsx";
import RedButton from "../components/RedButton.jsx";

import arrowDown from "../assets/icons/arrow_downward.svg";
import Footer from "../components/Footer.jsx";

const NotFoundPage = () => (
  <>
    <div className="home_page overflow-x-clip">
      <Header></Header>
      <div className="flex justify-center items-center flex-col h-[80vh] gap-10">
        <img src={arrowDown} alt="arrow pointing down" className="w-20 h-20" />
        <h1 className="text-8xl hinge lg:text-9xl">404</h1>
        <h2 className="text-2xl sm:text-4xl ">Sidan kunde inte hittas</h2>
        <RedButton path={"/"}>Tillbaka till startsidan</RedButton>
      </div>
      <Footer></Footer>
    </div>
  </>
);

export default NotFoundPage;
