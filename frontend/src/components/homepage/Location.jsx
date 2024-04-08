import React from "react";
import studentLaptop from "../../assets/photos/student-w-laptop.png";

const Location = () => (
  <section className="px-4 flex flex-row gap-3">
    <img className="w-32" src={studentLaptop} alt="happy student with laptop" />
    <div>
      <p>NÄR & VAR?</p>
      <p>Datum: 24 april 2024</p>
      <p>Tid: 15:00-19:00</p>
      <p>Plats: Lärdomsgatan 3, 417 56 Göteborg</p>
    </div>
  </section>
);

export default Location;
