import React from "react";
import studentsPaper from "../../assets/photos/students-w-paper.png";

const ForWho = () => (
  <section className="flex items-baseline my-6 px-3">
    <div className="w-full">
      <div>
        <img
          className="object-contain"
          src={studentsPaper}
          alt="students with a paper"
        />
      </div>
    </div>
    <div className="w-full bg-red-300 min-h-full z-10">
      <section className="flex items-center h-full">
        <div className="h-full ">
          <h1 className="overlapBox nowrap text-white bg-[#333] p-[6px] left-[-20px] relative mb-10 translate-y-[-11px] leading-none">
            FÖR VEM?
          </h1>
        </div>
      </section>
    </div>
  </section>
);

export default ForWho;

{
  /* <section className="flex flex-row px-4 pt-28 gap-3">
<img
  className="object-contain h-36"
  src={studentsPaper}
  alt="students with a paper"
/>
<div>
  <h4 className="text-4xl mb-3">FÖR VEM?</h4>
  Detta evenemang är för företag som:
</div>
</section> */
}
