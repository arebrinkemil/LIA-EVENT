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
      className="w-full inline-flex flex-nowrap mt-2 hover:cursor-pointer"
      onClick={scrollToBottom}
    >
      <ul className=" text-lg h-fit flex nowrap flex-nowrap items-center justify-center md:justify-start lg:[&_li]:mx-10 [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
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
          <p>Tid: 17:00 &ndash; 19:00</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Visual Arena</p>
        </li>
        <li>
          <BannerStar />
        </li>
      </ul>
      <ul className=" text-lg h-fit flex nowrap flex-nowrap items-center justify-center md:justify-start lg:[&_li]:mx-10 [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
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
          <p>Tid: 17:00 &ndash; 19:00</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Visual Arena</p>
        </li>
        <li>
          <BannerStar />
        </li>
      </ul>
      <ul className=" text-lg h-fit flex nowrap flex-nowrap items-center justify-center md:justify-start lg:[&_li]:mx-10 [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
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
          <p>Tid: 17:00 &ndash; 19:00</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Visual Arena</p>
        </li>
        <li>
          <BannerStar />
        </li>
      </ul>
      <ul className=" text-lg h-fit flex nowrap flex-nowrap items-center justify-center md:justify-start lg:[&_li]:mx-10 [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
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
          <p>Tid: 17:00 &ndash; 19:00</p>
        </li>
        <li>
          <BannerStar />
        </li>
        <li>
          <p>Visual Arena</p>
        </li>
        <li>
          <BannerStar />
        </li>
      </ul>
    </div>
  );
};

export default ScrollBanner;
