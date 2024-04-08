import React from "react";

import BulletPoint from "../BulletPoint.jsx";
const WhatIsIt = () => (
  <section className="pt-16 px-4 gap-4 flex flex-col">
    <h4 className="text-4xl mb-3">Vad är det?</h4>
    "LIA utan gränser" är ett evenemang som hjälper studenter att hitta den
    perfekta praktiken. På detta evenemang kan studenter:
    <BulletPoint>Presentera sig direkt för arbetsgivare</BulletPoint>
    <BulletPoint>
      Få information om de mest aktuella praktikplatserna
    </BulletPoint>
    <BulletPoint>Lär känna ledande företag i sin bransch</BulletPoint>
    <BulletPoint>
      Få värdefulla tips från experter på karriärutveckling
    </BulletPoint>
  </section>
);

export default WhatIsIt;
