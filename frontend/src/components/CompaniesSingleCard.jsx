import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import CompanyModal from "./CompanyModal";
import CardDividingLine from "./CardDividingLine";
import editPen from "../assets/icons/edit-pen.svg";

const CompanySingleCard = ({ company }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border border-black p-4 m-2 relative hover:shadow-xl">
      <h1 className="font-bold text-3xl ">{company.role}</h1>
      <CardDividingLine></CardDividingLine>
      <h2>{company.name}</h2>
      <h2>{company.location}</h2>
      <h2>{company.contact}</h2>
      <a
        href={`/companies/${company._id}/edit`}
        className="absolute top-4 right-4"
      >
        <img src={editPen} alt="edit" />
      </a>
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
