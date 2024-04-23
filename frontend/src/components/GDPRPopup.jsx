import React, { useRef, useEffect } from "react";

const GDPR = ({ onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white p-5 rounded-lg flex flex-col max-w-3xl md:px-24"
        ref={modalRef}
      >
        <h2 className="text-[clamp(1rem,2rem,48px)] text-center">
          Datahantering
        </h2>
        <h6 className="text-[clamp(1rem,1.5rem,2rem)] mt-4">Användare</h6>
        <p className="">
          Namn, mailadress och lösenord används enbart till inloggning, inget av
          dem är synligt eller åtkommligt för andra användare
        </p>
        <h6 className="text-[clamp(1rem,1.5rem,2rem)] mt-4">
          Företagsinformation
        </h6>
        <p className="">
          Information som matas in i företagsprofilen finns öppet på sidan,
          inloggad användare kan ändra eller ta bort information fritt.
        </p>
        <h6 className="text-[clamp(1rem,1.5rem,2rem)] mt-4">Cookies</h6>
        <p className="">
          Sidan använder en kaka för inloggning och auktorisering av användare.
        </p>
        <h6 className="text-[clamp(1rem,1.5rem,2rem)] mt-4">Lagring</h6>
        <p className="">
          Användardata och företagsinformation ligger kvar så länge sidan är
          relevant, efter det kommer databasen tömmas.
        </p>
        <p className="">Om en användare vill tas bort tidigare kontakta oss</p>
        <h6 className="text-[clamp(1rem,1.5rem,2rem)] mt-4">Övrig</h6>
        <p className="">Ingen inmatad information delas eller säljs vidare</p>
        <div className="flex justify-around gap-2 mt-4">
          <button
            className="bg-gray-300 border-[1px] px-10 py-4 rounded-full font-bold hover:bg-redHover hover:border-redHover hover:text-white"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default GDPR;
