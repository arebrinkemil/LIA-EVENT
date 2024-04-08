import React from "react";
import BulletPoint from "../BulletPoint";

const Student = () => (
  <section className="px-4 flex my-2 flex-col gap">
    <div className=" bg-black flex w-fit justify-start items-center text-center">
      <h1 className="responsive-heading text-white px-2">STUDENT?</h1>
    </div>
    <div className="">
      <span className="text-2xl px-1 w-auto bg-red text-white line-clamp-1 inline-block ">
        Evenemang för studenter som:
      </span>
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
);

export default Student;
