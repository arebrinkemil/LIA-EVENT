import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const LoginLogoutButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [cookies] = useCookies(["jwt"]);

  useEffect(() => {
    console.log(cookies.jwt);
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
        "http://localhost:5555/logout",
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
    <button onClick={isLoggedIn ? handleLogout : handleLogin}>
      <img src="" alt="Star Logo" />
      {isLoggedIn ? "Logga ut" : "Logga in"}
    </button>
  );
};
export default LoginLogoutButton;