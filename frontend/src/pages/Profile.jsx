import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Company from "../components/ListItem";
import axios from "axios";

const Profile = () => {
  const [cookies, removeCookie] = useCookies(["jwt"]);
  const [username, setUsername] = useState("");
  const [companies, setCompanies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
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
    <div className="p-4">
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <div className="w-full items-center flex flex-col">
        <h1 className="text-2xl">Your Companies</h1>
        {companies.map((company) => (
          <Company className="" key={company._id} company={company} />
        ))}
      </div>
      <Link to="/companies/create" className="p-2 bg-sky-300 m-8">
        CREATE NEW
      </Link>
    </div>
  );
};

export default Profile;
