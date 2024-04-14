import { useEffect, useState } from "react";
import CardDividingLine from "./CardDividingLine";
import editPen from "../assets/icons/edit-pen.svg";
import editPenWhite from "../assets/icons/edit-pen-white.svg";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const CompanySingleCard = ({ company }) => {
  const [cookies] = useCookies(["jwt"]);
  const [owner, setOwner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/profile`, {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data._id === company.owner_id) {
          setOwner(true);
        }
      })
      .catch(() => {
        console.log("not logged in");
      });
  }, []);

  return (
    <div
      onClick={() => navigate(`/companies/${company._id}`)}
      className="card border border-black p-4 m-2 relative hover:shadow-xl transition ease-in-out cursor-pointer"
    >
      <h1 className="font-bold text-3xl">{company.role}</h1>
      <div className="border-[1px] w-36 h-px my-3"></div>
      <h2>{company.name}</h2>
      <h2>{company.location}</h2>
      <h2>{company.contact}</h2>
      {owner && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/companies/${company._id}/edit`);
          }}
          className="edit-icon absolute top-4 right-4 cursor-pointer"
        >
          <img id="pen" src={editPen} alt="edit" />
          <img
            className="hidden"
            id="pen-white"
            src={editPenWhite}
            alt="edit"
          />
        </div>
      )}

      <div
        className="p-3 border  hover:scale-105 hover:bg-opacity-50 hover:bg-white border-black rounded-3xl absolute bottom-4 right-4 cursor-pointer"
        onClick={() => navigate(`/companies/${company._id}`)}
      >
        SE MER
      </div>
    </div>
  );
};

export default CompanySingleCard;
