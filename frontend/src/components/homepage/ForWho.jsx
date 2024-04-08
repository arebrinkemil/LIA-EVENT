import React from "react";
import studentsPaper from "../../assets/photos/students-w-paper.png";

const ForWho = () => (
  <>
    <section className="flex items-end px-3">
      <div className="w-1/2">
        <img
          className="object-contain"
          src={studentsPaper}
          alt="students with a paper"
        />
      </div>
      <div className=" ml-[-30px] z-10 bg-black flex justify-start items-center text-center">
        <h1 className="responsive-heading text-white px-2">FÖR VEM?</h1>
      </div>
    </section>
    <div className="px-3">
      <span className="text-2xl px-1 bg-red text-white line-clamp-none">
        Evenemang för företag som:
      </span>
    </div>
  </>
);

export default ForWho;
