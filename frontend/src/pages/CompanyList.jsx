import React, { useEffect, useState } from "react";
import axios from "axios";
import CompaniesCard from "../components/CompaniesCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Arrows from "../components/ArrowsDown";
import OverShoulder from "../assets/photos/over-shoulder.png";
import Rotate from "../assets/icons/find-lia-rotate.svg";
import SearchFilter from "../components/SearchFilter";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/companies")
      .then((response) => {
        setCompanies(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="overflow-x-clip relative">
        <Header></Header>
        <section className="text-4xl p-4">
          HITTA RÄTT LIA PLATS FÖR DIG
          <div className="flex flex-row items-center justify-between pt-2">
            <img
              className="h-24"
              src={OverShoulder}
              alt="datorskärm över axeln på student"
            />
            <img
              className="animate-rotate"
              src={Rotate}
              alt="hitta en lia som passar dig"
            />
          </div>
        </section>
        <SearchFilter></SearchFilter>
        <Arrows></Arrows>
        <div className="p-4">
          <CompaniesCard companies={companies} />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CompanyList;
