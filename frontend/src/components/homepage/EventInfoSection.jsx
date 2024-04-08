import React from "react";

import studentsLaptops from "../../assets/photos/students-w-laptops.png";

const EventInfoSection = () => (
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
);

export default EventInfoSection;
