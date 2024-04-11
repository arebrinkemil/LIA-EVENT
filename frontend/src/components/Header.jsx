import { useNavigate } from "react-router-dom";
import BurgerStar from "./BurgerStar.jsx";
import logo from "../assets/icons/yrgoLogo.svg";
import LoginLogoutButton from "./LoginLogoutButton.jsx";

const Header = () => {
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate("/");
  };
  const handleLIA = () => {
    navigate("/companies");
  };

  return (
    <>
      <header className="sticky top-0 z-50  px-4 py-3 bg-black h-18 justify-center">
        <div className="flex flex-row justify-between">
          <img
            className="hover:cursor-pointer md:h-8"
            onClick={handleLogo}
            src={logo}
            alt="Yrgo logo"
          />
          <BurgerStar></BurgerStar>
          <div
            className="text-white hidden md:flex items-center hover:cursor-pointer"
            onClick={handleLogo}
          >
            Home
          </div>
          <div
            className="text-white hidden md:flex items-center hover:cursor-pointer"
            onClick={handleLIA}
          >
            Hitta LIA
          </div>
          <div className="hidden md:flex md:flex-row">
            <LoginLogoutButton></LoginLogoutButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
