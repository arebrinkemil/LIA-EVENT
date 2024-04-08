import React from "react";
import eyesBook from "../../assets/photos/eyes-over-book.png";
import BulletPoint from "../BulletPoint";

const Bullets = () => (
  <section className="px-4 pt-20 flex flex-col gap-3">
    <div className="flex flex-row gap-3">
      <div className="flex flex-col gap-3">
        <BulletPoint>Vill skapa nya kontakter</BulletPoint>
        <BulletPoint>
          Letar efter praktikanter i enlighet med sina intressen och färdigheter
        </BulletPoint>
      </div>
      <img
        className="object-contain h-44"
        src={eyesBook}
        alt="person peeking over a book"
      />
    </div>
    <BulletPoint>
      Ett tillfälle att synas inför potentiella framtida kollegor
    </BulletPoint>
  </section>
);

export default Bullets;
