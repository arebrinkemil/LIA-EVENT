import React from "react";
import HorizontalLine from "./HorizontalLine";
import asterisk from "../assets/icons/asterisk-black.svg";

export const CompanyDetails = ({ company }) => (
  <div className="px-4">
    <div className="flex items-center">
      <label className="text-xl font-bold nowrap leading-3 lg:font-normal">
        Roll:&nbsp;
      </label>
      <div className=" text-xl py-2 w-full leading-3"> {company.role}</div>
    </div>
    <div className=" flex items-center lg:mt-4">
      <label className="text-xl font-bold nowrap leading-3 lg:font-normal">
        Plats:&nbsp;
      </label>
      <div className=" text-xl py-2 w-full leading-3"> {company.location}</div>
    </div>
    <div className=" flex items-center lg:mt-4">
      <label className="text-xl font-bold nowrap mr-1 leading-3 lg:font-normal">
        Lia-platser:&nbsp;
      </label>
      <div className=" text-xl py-2 w-full leading-3"> {company.amount} st</div>
    </div>
  </div>
);

export const CompanyAbout = ({ company }) => (
  <div className="my-4 px-4">
    <label className="text-xl mr-4 text-gray-500 font-bold">Om oss</label>
    <div className=" py-2 w-full whitespace-pre-line">{company.about}</div>
    <div className=" my-4">
      <label className="text-xl mr-4 text-gray-500 font-bold">
        Verktyg som ni använder inom verksamheten
      </label>
      <ul className=" py-2 w-full">
        {company.tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
    <div className=" my-4">
      <label className="text-xl mr-4 text-gray-500 font-bold">
        Arbetsuppgifter under LIA
      </label>
      <div className="py-2 w-full whitespace-pre-line">
        {company.task_description}
      </div>
    </div>
  </div>
);

export const CompanyContact = ({ company }) => (
  <div>
    <div className="lg:hidden">
      <HorizontalLine />
    </div>
    <div className="px-4 my-4  flex justify-between lg:my-0 lg:pt-4">
      <div>
        <label className="text-xl mr-4 text-gray-500 font-bold">
          Kontaktperson
        </label>
        <div className="py-2 w-full">{company.contact}</div>
      </div>
      <img src={asterisk} alt="asterisk icon" />
    </div>
    <div className="px-4 my-4">
      <label className="text-xl mr-4 text-gray-500 font-bold">Webbsida</label>
      <div className="py-2 w-full">{company.url}</div>
    </div>
  </div>
);
