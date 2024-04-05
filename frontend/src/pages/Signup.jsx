import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterCheckbox from "../components/FilterCheckbox.jsx";
import NavButton from "../components/NavButton.jsx";

import DividerStar from "../components/NavDivider.jsx";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://134.122.48.238:5555/",
        { email, password, name: username },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong. Please try again later.");
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <div className="overflow-x-clip relative">
        <Header></Header>
        <div className="m-4 w-full flex flex-row gap-1 items-center">
          <NavButton path={"/"}>HEM</NavButton>
          <DividerStar></DividerStar>
          <NavButton>SKAPA ANVÄNDARE</NavButton>
        </div>
        <div className="form_container m-4">
          <h2 className="text-4xl">Skapa användare för ert företag</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-3">
              <label htmlFor="email">*E-mail</label>
              <input
                className="border border-black rounded-3xl p-3"
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="namn@mailadress.com"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="username">*Namn</label>
              <input
                className="border border-black rounded-3xl p-3"
                id="username"
                type="text"
                name="username"
                value={username}
                placeholder="Namn"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="password">*Lösenord</label>
              <input
                className="border border-black rounded-3xl p-3"
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="Lösenord"
                onChange={handleOnChange}
              />
            </div>
            <FilterCheckbox>
              Jag samtycker till
              <a href="">
                <u>databehandling</u>
              </a>
            </FilterCheckbox>
            <button
              className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl w-[calc(100vw-32px)] p-3 mt-8"
              type="submit"
            >
              Skapa användare
            </button>
          </form>
          <ToastContainer />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Signup;
