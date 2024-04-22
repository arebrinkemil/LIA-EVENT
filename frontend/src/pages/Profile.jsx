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
          "https://liaevent.arebr.ink/api/companies/your_companies",
          {
            headers: {
              Authorization: `Bearer ${cookies.jwt}`,
            },
            withCredentials: true,
          }
        );
        setCompanies(response.data);
      } catch (error) {
        // console.error("Error fetching companies:", error);
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
        const response = await axios.get(
          "https://liaevent.arebr.ink/api/profile",
          {
            headers: {
              Authorization: `Bearer ${cookies.jwt}`,
            },
            withCredentials: true,
          }
        );
        const { data } = response;
        setUsername(data.name);
      } catch (error) {
        removeCookie("jwt");
        navigate("/login");
      }
    };
    verifyAuth();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://liaevent.arebr.ink/api/logout",
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

        <div className="w-full items-center p-4">
          <h1 className="text-[34px]">Välkommen till kontosidan</h1>
          <p className="text-xl md:w-1/2 w-full ">
            {" "}
            Nedan kan ni lägga till eller redigera ert företagskort. Efter att
            ni publicerar företagskortet kommer det att bli synligt för
            studenter som besöker sidan "Hitta LIA".
          </p>
          <div className="lg:mr-10">
            <CompaniesCard companies={companies} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center md:items-start">
          <Link to="/companies/create">
            <div className="flex flex-row border border-black rounded-3xl p-3 gap-2 text-xl md:ml-6">
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
