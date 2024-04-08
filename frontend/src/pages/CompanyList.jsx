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
  const [filtered, setFiltered] = useState(companies);
  const [filters, setFilters] = useState({
    Webdeveloper: false,
    Designer: false,
    Gothenburg: false,
    Outside_Gothenburg: false,
    Two_or_fewer: false,
    More_than_two: false,
  });

  const toggleFilter = (filterName, isChecked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: isChecked,
    }));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/companies")
      .then((response) => {
        setCompanies(response.data.data);
        setLoading(false);
        const fetchedData = response.data.data;
        const filteredData = fetchedData.filter((company) => {
          const bothRolesActive = filters.Webdeveloper && filters.Designer;
          const bothLocationsActive =
            filters.Gothenburg && filters.Outside_Gothenburg;
          const bothAmountsActive =
            filters.Two_or_fewer && filters.More_than_two;
          if (bothRolesActive) {
            if (
              !filters.Gothenburg &&
              !filters.Outside_Gothenburg &&
              !filters.Two_or_fewer &&
              !filters.More_than_two
            ) {
              return (
                company.role === "Webdeveloper" || company.role === "Designer"
              );
            } else if (
              filters.Gothenburg &&
              !filters.Outside_Gothenburg &&
              !filters.Two_or_fewer &&
              !filters.More_than_two
            ) {
              return company.location === "Gothenburg";
            } else if (
              !filters.Gothenburg &&
              filters.Outside_Gothenburg &&
              !filters.Two_or_fewer &&
              !filters.More_than_two
            ) {
              return company.location === "Outside_Gothenburg";
            } else if (
              filters.Gothenburg &&
              !filters.Outside_Gothenburg &&
              filters.Two_or_fewer &&
              !filters.More_than_two
            ) {
              return company.amount <= 2 && company.location === "Gothenburg";
            } else if (
              filters.Gothenburg &&
              !filters.Outside_Gothenburg &&
              !filters.Two_or_fewer &&
              filters.More_than_two
            ) {
              return company.amount > 2 && company.location === "Gothenburg";
            } else if (
              !filters.Gothenburg &&
              filters.Outside_Gothenburg &&
              filters.Two_or_fewer &&
              !filters.More_than_two
            ) {
              return (
                company.amount <= 2 && company.location === "Outside_Gothenburg"
              );
            } else if (
              !filters.Gothenburg &&
              filters.Outside_Gothenburg &&
              !filters.Two_or_fewer &&
              filters.More_than_two
            ) {
              return (
                company.amount > 2 && company.location === "Outside_Gothenburg"
              );
            }
          }
          if (bothLocationsActive) {
            if (
              !filters.Designer &&
              !filters.Webdeveloper &&
              !filters.Two_or_fewer &&
              !filters.More_than_two
            ) {
              return (
                company.location === "Gothenburg" ||
                company.location === "Outside_Gothenburg"
              );
            } else if (
              filters.Designer &&
              !filters.Webdeveloper &&
              !filters.Two_or_fewer &&
              !filters.More_than_two
            ) {
              return company.role === "Designer";
            } else if (
              !filters.Designer &&
              filters.Webdeveloper &&
              !filters.Two_or_fewer &&
              !filters.More_than_two
            ) {
              return company.role === "Webdeveloper";
            } else if (
              !filters.Designer &&
              !filters.Webdeveloper &&
              filters.Two_or_fewer &&
              !filters.More_than_two
            ) {
              return company.amount <= 2;
            } else if (
              !filters.Designer &&
              !filters.Webdeveloper &&
              !filters.Two_or_fewer &&
              filters.More_than_two
            ) {
              return company.amount > 2;
            } else if (bothRolesActive && !bothAmountsActive) {
              return company.role === "Designer";
            } else if (
              bothRolesActive &&
              filters.Two_or_fewer &&
              !filters.More_than_two
            ) {
              return company.amount <= 2;
            } else if (
              bothRolesActive &&
              !filters.Two_or_fewer &&
              filters.More_than_two
            ) {
              return company.amount > 2;
            }
          }

          for (const [key, value] of Object.entries(filters)) {
            if (value) {
              if (key === "Webdeveloper" && company.role !== key) return false;
              if (key === "Designer" && company.role !== key) return false;
              if (key === "Gothenburg" && company.location !== key)
                return false;
              if (key === "Outside_Gothenburg" && company.location !== key)
                return false;
              if (key === "Two_or_fewer" && company.amount > 2) return false;
              if (key === "More_than_two" && company.amount <= 2) return false;
            }
          }
          return true;
        });

        setFiltered(filteredData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [filters]);

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
        <SearchFilter toggleFilter={toggleFilter} />
        <Arrows></Arrows>
        <div className="p-4">
          <CompaniesCard companies={filtered} />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CompanyList;
