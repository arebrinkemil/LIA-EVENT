import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Header from "../components/Header";

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
      removeCookie("jwt");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="p-4">
        <div className="home_page">
          <h4>
            {" "}
            Welcome <span>{username}</span>
          </h4>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
        <div>
          <h2>Your Companies</h2>
          {companies.map((company) => (
            <div key={company._id}>
              <h3>{company.name}</h3>
              <p>About: {company.about}</p>
              <p>Contact: {company.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
