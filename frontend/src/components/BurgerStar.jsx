import burger from "../assets/icons/burgerStar.svg";
import { useState } from "react";
import LoginLogoutButton from "./LoginLogoutButton";
import { useNavigate } from "react-router-dom";

const BurgerStar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsNavOpen((prev) => !prev);
    setIsRotated(!isRotated);
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleLIA = () => {
    navigate("/companies");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className={`relative ${isNavOpen ? "" : ""}`}>
        <img
          className={`-rotate-180 transition ease-in-out duration-1000 ${
            isRotated ? "rotate-180" : ""
          }`}
          src={burger}
          alt="Menu"
          onClick={handleClick}
        />
        <div
          className={`absolute w-screen z-20 top-15 -right-4 bg-white flex flex-col align-middle justify-center text-center transition-transform duration-500 ease-in-out transform ${
            isNavOpen ? "" : "translate-x-full"
          }`}
        >
          <button
            className="p-2 text-5xl border-solid border-2 border-black w-full"
            onClick={handleHome}
          >
            HEM
          </button>
          <button
            className="p-2 text-5xl border-solid border-x-2 border-black w-full"
            onClick={handleLIA}
          >
            LIA
          </button>
          <button
            className="p-2 text-5xl border-solid border-2 border-black w-full"
            onClick={handleProfile}
          >
            PROFIL
          </button>
          <LoginLogoutButton></LoginLogoutButton>
        </div>
      </div>
    </>
  );
};
export default BurgerStar;
