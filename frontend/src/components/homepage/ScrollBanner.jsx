import React from "react";
import BannerStar from "./bannerstar";

const ScrollBanner = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="w-full inline-flex flex-nowrap mt-2"
      onClick={scrollToBottom}
    >
      <ul className=" text-lg h-fit flex nowrap items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <p>När & var?</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Datum: 24 april 2024</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Tid: 15:00-19:00</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Visuell Arena</p>
        </li>
        <li>
          <BannerStar />
        </li>
      </ul>
      <ul className=" text-lg h-fit flex nowrap items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <p>När & var?</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Datum: 24 april 2024</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Tid: 15:00-19:00</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Visuell Arena</p>
        </li>
        <li>
          <BannerStar />
        </li>
      </ul>
      <ul className=" text-lg h-fit flex nowrap items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <p>När & var?</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Datum: 24 april 2024</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Tid: 15:00-19:00</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Visuell Arena</p>
        </li>
        <li>
          <BannerStar />
        </li>
      </ul>
      <ul className=" text-lg h-fit flex nowrap items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <p>När & var?</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Datum: 24 april 2024</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Tid: 15:00-19:00</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Visuell Arena</p>
        </li>
        <li>
          <BannerStar />
        </li>
      </ul>
    </div>
  );
};

export default ScrollBanner;
