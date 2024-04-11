import React from "react";

import studentsLaptops from "../../assets/photos/students-w-laptops.png";

const EventInfoSection = () => (
  <section className="px-4 text-lg flex flex-row justify-between align-middle items-start">
    <div>
      <div>24 APRIL</div>
      <div>MEETUP</div>
    </div>
    <div className="flex flex-col">
      <img
        className="object-contain h-36"
        src={studentsLaptops}
        alt="students with laptops"
      />
      <p className="w-full text-lg text-center">17:00-19:00</p>
    </div>
    2024
  </section>
);

export default EventInfoSection;
