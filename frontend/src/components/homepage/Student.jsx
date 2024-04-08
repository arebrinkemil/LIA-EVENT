import React from "react";
import BulletPoint from "../BulletPoint";

const Student = () => (
  <section className="px-4 flex flex-col gap-3">
    <div className="w-44 mb-3">
      <h4 className="text-4xl mb-3">STUDENT?</h4>
      Detta evenemang är för företag som:
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
