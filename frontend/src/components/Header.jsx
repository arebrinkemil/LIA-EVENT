import { useNavigate } from "react-router-dom";
import BurgerStar from "./BurgerStar.jsx";
import logo from "../assets/icons/yrgoLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate("/");
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="flex flex-row justify-between px-4 py-3 bg-black w-screen h-18 z-10">
          <img
            className="hover:cursor-pointer"
            onClick={handleLogo}
            src={logo}
            alt="Yrgo logo"
          />
          <BurgerStar></BurgerStar>
        </div>
      </header>
    </>
  );
};

export default Header;
