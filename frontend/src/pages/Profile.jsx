import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Header from "../components/Header";
import CompaniesCard from "../components/CompaniesCard";
import Footer from "../components/Footer";
import plus from "../assets/icons/plus.svg";
import NavButton from "../components/NavButton";
import DividerStar from "../components/NavDivider";

const Profile = () => {
  const [cookies, removeCookie] = useCookies(["jwt"]);
  const [username, setUsername] = useState("");
  const [companies, setCompanies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5555/companies/your_companies",
          {
            headers: {
              Authorization: `Bearer ${cookies.jwt}`,
            },
            withCredentials: true,
          }
        );
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
    const verifyAuth = async () => {
      if (!cookies.jwt) {
        console.log("No JWT found, redirecting to login");
        navigate("/login");
        return;
      }
      try {
        const response = await axios.get("http://localhost:5555/profile", {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
          withCredentials: true,
        });
        const { data } = response;
        setUsername(data.name);
        console.log("Response data:", data);
      } catch (error) {
        console.error("Error verifying authentication:", error);
        removeCookie("jwt");
        navigate("/login");
      }
    };
    verifyAuth();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5555/logout",
        {},
        {
          withCredentials: true,
        }
      );

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <div className="relative min-h-screen overflow-x-clip">
        <Header></Header>
        <div className="m-4 w-full flex flex-row gap-1 items-center">
          <NavButton path={"/"}>HEM</NavButton>
          <DividerStar></DividerStar>
          <NavButton>PROFIL</NavButton>
        </div>

        <div className="w-full items-center p-4 lg:mx-10">
          <h1 className="text-[34px]">Välkommen till kontosidan</h1>
          <p className="text-lg">
            {" "}
            Nedan kan ni redigera redan befintliga företagskort eller lägga till
            ett nytt.
          </p>
          <div className="">
            <CompaniesCard companies={companies} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center md:items-end">
          <Link to="/companies/create">
            <div className="flex flex-row border border-black rounded-3xl p-3 gap-2 font-bold text-xl md:mr-20">
              Lägg till kort
              <img src={plus} alt="create company plus icon" />
            </div>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Profile;
