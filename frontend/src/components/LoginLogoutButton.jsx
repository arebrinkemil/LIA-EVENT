import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const LoginLogoutButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [cookies] = useCookies(["jwt"]);

  useEffect(() => {
    //console.log(cookies.jwt);
    if (cookies.jwt) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [cookies]);

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
    <button
      className="p-2 text-5xl border-solid border-x-2 border-b-2 border-black w-full md:text-xl md:bg-red md:text-white md:rounded-3xl md:px-4"
      onClick={isLoggedIn ? handleLogout : handleLogin}
    >
      {isLoggedIn ? "LOG OUT" : "LOG IN"}
    </button>
  );
};
export default LoginLogoutButton;
