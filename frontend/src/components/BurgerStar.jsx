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
      <div className="relative">
        <img
          className={`-rotate-180 transition ease-in-out duration-300 ${
            isRotated ? "rotate-180" : ""
          }`}
          src={burger}
          alt="Menu"
          onClick={handleClick}
        />
        <div
          className={`absolute top-8 right-1 z-10 bg-slate-50 flex flex-col align-middle justify-center text-center w-48 transition-all duration-300 ease-out transform ${
            isNavOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <button
            className="p-2 border-solid border-2 border-black w-full"
            onClick={handleHome}
          >
            HEM
          </button>
          <button
            className="p-2 border-solid border-x-2 border-black w-full"
            onClick={handleLIA}
          >
            LIA
          </button>
          <button
            className="p-2 border-solid border-2 border-black w-full"
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
