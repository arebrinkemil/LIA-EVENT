import React from "react";
import eyesBook from "../../assets/photos/eyes-over-book.png";
import BulletPoint from "../BulletPoint";

const Bullets = () => (
  <section className="px-4 my-2 flex flex-col gap-3">
    <div className="flex flex-row">
      <div className="flex flex-col gap-3 basis-1/2">
        <BulletPoint>
          <p>Vill skapa nya kontakter</p>
        </BulletPoint>
        <BulletPoint>
          <p>
            Letar efter praktikanter i enlighet med sina intressen och
            färdigheter
          </p>
        </BulletPoint>
        <BulletPoint>
          <p>Ett tillfälle att synas inför potentiella framtida kollegor</p>
        </BulletPoint>
      </div>
      <div className="basis-1/2">
        <img
          className="object-contain"
          src={eyesBook}
          alt="person peeking over a book"
        />
      </div>
    </div>
  </section>
);

export default Bullets;
