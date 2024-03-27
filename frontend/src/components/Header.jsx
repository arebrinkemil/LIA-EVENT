import { useNavigate } from "react-router-dom";
import BurgerStar from "./BurgerStar.jsx";
import logo from "../assets/icons/yrgoLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate("/");
  };

  return (
    <header className="flex flex-row justify-between px-4 py-3 bg-black">
      <img onClick={handleLogo} src={logo} alt="Yrgo logo" />
      <BurgerStar></BurgerStar>
    </header>
  );
};

export default Header;
