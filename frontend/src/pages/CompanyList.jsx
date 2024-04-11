import React, { useEffect, useState } from "react";
import axios from "axios";
import CompaniesCard from "../components/CompaniesCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Arrows from "../components/ArrowsDown";
import OverShoulder from "../assets/photos/over-shoulder.png";
import Rotate from "../assets/icons/find-lia-rotate.svg";
import SearchFilter from "../components/SearchFilter";
import DOMpurify from "dompurify";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState(companies);
  const [searchInput, setSearchInput] = useState("");
  const [filters, setFilters] = useState({
    Webdeveloper: false,
    Designer: false,
    Gothenburg: false,
    Outside_Gothenburg: false,
    Two_or_fewer: false,
    More_than_two: false,
  });

  const handleSearchInput = (e) => {
    const clean = DOMpurify.sanitize(e.target.value);
    setSearchInput(clean);
  };

  const toggleFilter = (filterName, isChecked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: isChecked,
    }));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://134.122.48.238:5555/companies")
      .then((response) => {
        setCompanies(response.data.data);
        setLoading(false);
        const fetchedData = response.data.data;
        const roleFilters = {
          Webdeveloper: (company) => company.role === "Webdeveloper",
          Designer: (company) => company.role === "Designer",
        };

        const locationFilters = {
          Gothenburg: (company) => company.location === "Gothenburg",
          Outside_Gothenburg: (company) =>
            company.location === "Outside_Gothenburg",
        };
        const exclusiveFilters = {
          Two_or_fewer: (company) => company.amount <= 2,
          More_than_two: (company) => company.amount > 2,
        };

        const filteredData = fetchedData.filter((company) => {
          const activeRoleFilters = Object.entries(filters).filter(
            ([key, value]) => value && roleFilters[key]
          );
          const rolePass =
            !activeRoleFilters.length ||
            activeRoleFilters.some(([key, _]) => roleFilters[key](company));
          const activeLocationFilters = Object.entries(filters).filter(
            ([key, value]) => value && locationFilters[key]
          );
          const locationPass =
            !activeLocationFilters.length ||
            activeLocationFilters.some(([key, _]) =>
              locationFilters[key](company)
            );
          const exclusivePass = Object.entries(exclusiveFilters).every(
            ([key, condition]) => {
              return !filters[key] || condition(company);
            }
          );
          const nameStartsWith = searchInput
            ? company.name.toLowerCase().startsWith(searchInput.toLowerCase())
            : true;

          return rolePass && locationPass && exclusivePass && nameStartsWith;
        });

        setFiltered(filteredData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [filters, searchInput]);

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
        <SearchFilter
          toggleFilter={toggleFilter}
          handleSearchInput={handleSearchInput}
        />
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
