import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StudentWithLaptop from "../assets/photos/student-w-laptop-square.png";
import Arrow from "../assets/icons/arrow-right-up.svg";
import NavButton from "../components/NavButton";
import DividerStar from "../components/NavDivider";
import DOMPurify from "dompurify";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    navigate("/forgotpassword");
  };

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const clean = DOMPurify.sanitize(value);
    setInputValue({
      ...inputValue,
      [name]: clean,
    });
  };

  const handleError = (err) =>
    enqueueSnackbar(err, {
      variant: "error",
      autoHideDuration: 1000,
    });

  const handleSuccess = (msg) =>
    enqueueSnackbar(msg, {
      variant: "success",
      autoHideDuration: 1000,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://134.122.48.238:5555/api/auth",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      //console.log(data);
      const { success } = data;
      if (success) {
        handleSuccess("Successfully logged in");
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      } else {
        handleError("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong. Please try again later.");
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="overflow-x-clip relative">
        <Header></Header>
        <div className="m-4 w-full flex flex-row gap-1 items-center">
          <NavButton path={"/"}>HEM</NavButton>
          <DividerStar></DividerStar>
          <NavButton>LOGGA IN</NavButton>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-7 md:mb-20">
          <div className="md:flex md:flex-col md:col-span-1 md:ml-28">
            <section className="flex flex-row gap-4 m-4 md:text-3xl">
              Välj att antingen registrera er som användare eller logga in ifall
              ni tidigare skapat ett konto hos oss.
              <img
                className="h-40 md:hidden"
                src={StudentWithLaptop}
                alt="student with laptop"
              />
            </section>
            <div className="form_container mx-4 mt-8">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label htmlFor="email">E-mail</label>
                  <input
                    className="border border-black rounded-3xl p-3"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Emailadress..."
                    onChange={handleOnChange}
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="password">Lösenord</label>
                  <input
                    className="border border-black rounded-3xl p-3"
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Lösenord..."
                    onChange={handleOnChange}
                  />
                </div>
                <a
                  onClick={handleClick}
                  className="cursor-pointer hover:font-bold"
                >
                  Glömt lösenord?
                </a>
                <button
                  className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl w-[calc(100vw-32px)] max-w-full p-3 mt-8 hover:bg-redHover"
                  type="submit"
                >
                  Logga in
                </button>

                <div className="flex flex-row items-center justify-center w-full my-3">
                  eller
                </div>
                <button
                  onClick={() => navigate("/signup")}
                  className="font-bold text-xl rounded-3xl w-[calc(100vw-32px)] max-w-full p-3 px-10 border mb-14 border-black hover:border-redHover hover:bg-redHover hover:text-white"
                >
                  Registrera användare
                </button>
              </form>
            </div>
          </div>
          <img
            className="hidden md:block md:max-w-full md:max-h-full md:pr-28"
            src={StudentWithLaptop}
            alt="student with laptop"
          />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Login;
