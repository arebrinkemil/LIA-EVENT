import axios from "axios";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const ListItem = ({ company }) => {
  const [logotype, setLogotype] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5555/companies/upload/${company.companyId}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.length > 0) {
          console.log(response.data[0]);
          setLogotype(response.data[0]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [company._id]);

  const [cookies] = useCookies(["jwt"]);

  const deleteCompany = async () => {
    try {
      await axios.delete(`http://localhost:5555/companies/${company._id}`, {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
        withCredentials: true,
      });
      console.log("Company deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="border-black border-2 rounded-xl p-4 my-4 w-2/4"
      key={company._id}
    >
      <br></br>
      <h3 className="text-2xl">{company.name}</h3>
      <p>About: {company.about}</p>
      <p>Contact: {company.contact}</p>
      {logotype && <img src={logotype} alt="Company logotype" />}
      <Link
        className="border-black border-2 p-1"
        to={`/companies/${company._id}`}
      >
        EDIT
      </Link>
      <button className="border-black border-2 p-1" onClick={deleteCompany}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
