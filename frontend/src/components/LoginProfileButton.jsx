import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import ProfileIcon from "../assets/icons/profile-icon.svg";
import LoginLogoutButton from "./LoginLogoutButton";

const LoginProfileButton = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [cookies] = useCookies(["jwt"]);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    //console.log(cookies.jwt);
    if (cookies.jwt) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [cookies]);

  const handleClick = () => {
    setIsNavOpen((prev) => !prev);
  };
  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://134.122.48.238:5555/logout",
        {},
        {
          withCredentials: true,
        }
      );
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <div
        className={`${
          isLoggedIn
            ? ""
            : " w-full md:text-xl md:bg-red py-3 px-6 hover:bg-redHover"
        } text-5xl rounded-3xl md:text-white hover:cursor-pointer`}
        onClick={isLoggedIn ? handleClick : handleLogin}
      >
        {isLoggedIn ? <img src={ProfileIcon} alt="profile icon" /> : "Logga in"}
      </div>
      <div
        className={`absolute z-20 top-15 -right-0 bg-white flex flex-col align-middle justify-center text-center transition-transform duration-500 ease-in-out transform ${
          isNavOpen ? "" : "translate-x-full"
        }`}
        ref={modalRef}
      >
        <button
          className="p-2 text-5xl border-solid border-2 border-black w-full"
          onClick={handleProfile}
        >
          PROFIL
        </button>
        <button
          className="p-2 text-5xl border-solid border-b-2 border-x-2 border-black w-full"
          onClick={handleLogout}
        >
          LOG OUT
        </button>
      </div>
    </>
  );
};
export default LoginProfileButton;
