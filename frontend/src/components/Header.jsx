import LoginLogoutButton from "./LoginLogoutButton";
import BurgerStar from "./BurgerStar.jsx";
import logo from "../assets/icons/yrgoLogo.svg";

const Header = () => {
  return (
    <header className="flex flex-row justify-between px-4 py-3">
      <img src={logo} alt="Yrgo logo" />
      <BurgerStar></BurgerStar>
      <LoginLogoutButton></LoginLogoutButton>
    </header>
  );
};

export default Header;
