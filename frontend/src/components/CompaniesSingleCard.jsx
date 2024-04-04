import { useEffect, useState } from "react";
import CardDividingLine from "./CardDividingLine";
import editPen from "../assets/icons/edit-pen.svg";
import axios from "axios";
import { useCookies } from "react-cookie";

const CompanySingleCard = ({ company }) => {
  const [cookies] = useCookies(["jwt"]);
  const [owner, setOwner] = useState(false);

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
    <div className="border border-black p-4 my-2 relative hover:shadow-xl">
      <h1 className="font-bold text-3xl ">{company.role}</h1>
      <CardDividingLine></CardDividingLine>
      <h2>{company.name}</h2>
      <h2>{company.location}</h2>
      <h2>{company.contact}</h2>
      {owner && (
        <a
          href={`/companies/${company._id}/edit`}
          className="absolute top-4 right-4"
        >
          <img src={editPen} alt="edit" />
        </a>
      )}
      <a
        href={`/companies/${company._id}`}
        className="p-3 border-black border rounded-3xl absolute bottom-4 right-4"
      >
        SE MER
      </a>
    </div>
  );
};

export default CompanySingleCard;
