import burger from "../assets/icons/burgerStar.svg";
import { useState } from "react";
import LoginLogoutButton from "./LoginLogoutButton";

const BurgerStar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <img
        src={burger}
        alt="Menu"
        onClick={() => setIsNavOpen((prev) => !prev)}
      />
      <div style={{ display: isNavOpen ? "block" : "none" }}>
        <LoginLogoutButton></LoginLogoutButton>
      </div>
    </>
  );
};
export default BurgerStar;
