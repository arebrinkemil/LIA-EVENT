import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavButton from "../components/NavButton.jsx";
import DividerStar from "../components/NavDivider.jsx";
import GDPR from "../components/GDPRPopup.jsx";
import CheckboxChecked from "../assets/icons/checkbox-checked.svg";
import CheckboxUnchecked from "../assets/icons/checkbox-unchecked.svg";
import DOMpurify from "dompurify";

const Signup = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [isChecked, setIsChecked] = useState(false);
  const [showGDPR, setShowGDPR] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const cleanValue = DOMpurify.sanitize(value);
    setInputValue((prev) => ({ ...prev, [name]: cleanValue }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePopup = () => {
    setShowGDPR(true);
  };

  const handleClose = () => {
    setShowGDPR(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      enqueueSnackbar("Datahantering måste godkännas", { variant: "error" });
      return;
    }
    try {
      const response = await axios.post(
        "http://134.122.48.238:5555/api/",
        {
          email,
          password,
          name: username,
        },
        {
          withCredentials: true,
        }
      );
      const { data } = response;
      const { success, message } = data;

      if (success) {
        enqueueSnackbar(message || "Registration successful!", {
          variant: "success",
        });
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      } else {
        enqueueSnackbar(message || "Registration failed, please try again!", {
          variant: "error",
        });
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Network error, please try again later.", {
        variant: "error",
      });
    }
  };

  return (
    <>
      <div className="overflow-x-clip relative min-h-[100vh]">
        <Header />
        <div className="m-4 w-full flex flex-row gap-1 items-center">
          <NavButton path={"/"}>HEM</NavButton>
          <DividerStar />
          <NavButton>SKAPA ANVÄNDARE</NavButton>
        </div>
        <div className="form_container m-4 mt-12 mb-12 sm:mx-28 md:mx-40 lg:mx-60 xl:mx-96 min-h-[60vh]">
          <h2 className="text-4xl md:mb-6 md:text-center">
            Skapa användare för ert företag
          </h2>
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
            <div className="flex flex-row items-center gap-3 mt-3">
              <input
                type="checkbox"
                id="consent"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ display: "none" }}
              />
              <div className="cursor-pointer" onClick={handleCheckboxChange}>
                {isChecked ? (
                  <img src={CheckboxChecked} alt="" />
                ) : (
                  <img src={CheckboxUnchecked} alt="" />
                )}
              </div>
              <label htmlFor="consent">
                Jag samtycker till &nbsp;
                <u onClick={handlePopup} className="hover:cursor-pointer">
                  databehandling
                </u>
              </label>
              {showGDPR && <GDPR onClose={handleClose} />}
            </div>
            <button
              className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl border border-red w-[calc(100vw-32px)] max-w-full p-3 mt-8 disabled:bg-white disabled:text-grey disabled:border disabled:border-grey hover:bg-redHover"
              type="submit"
              disabled={!isChecked}
            >
              Skapa användare
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
