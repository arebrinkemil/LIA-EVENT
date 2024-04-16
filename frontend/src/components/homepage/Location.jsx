import React from "react";
import studentLaptop from "../../assets/photos/student-w-laptop.png";

const Location = () => (
  <section className="px-4 flex flex-row gap-3 mb-8 w-full">
    <img
      className="w-1/3 object-cover"
      src={studentLaptop}
      alt="happy student with laptop"
    />
    <div className="w-2/3">
      <p className="text-3xl">NÄR & VAR?</p>
      <p className="text-lg">Datum: 24 april 2024</p>
      <p className="text-lg">Tid: 17:00-19:00</p>
      <p className="text-lg">
        Plats: Visual Arena Lindholmspiren 3 417 56 Göteborg
      </p>
    </div>
  </section>
);

export default Location;
