import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox";

const SearchFilterDesktop = ({ onFilterChange, setFilters, toggleFilter }) => {
  const handleClick = () => {
    setIsFilterShown((prev) => !prev);
  };
  return (
    <>
      <div className="max-w-xs m-3 mt-14">
        <div className="border border-black border-solid px-3">
          <h2 className="text-4xl my-2">Filtrera</h2>
          <p className="mb-8">
            Nedan kan du anpassa vilka företag som skall visas i din vy genom
            att kryssa i eller ur check-rutan.
          </p>
        </div>
        <div className="border-x border-black border-solid px-3 py-5">
          <FilterCheckbox
            toggleFilter={toggleFilter}
            label="YRKE"
            options={["Designer", "Webdeveloper"]}
            name={["DIGITAL DESIGNER", "WEBBUTVECKLARE"]}
            onChange={onFilterChange}
          ></FilterCheckbox>
        </div>
        <div className="border-x border-t border-black border-solid px-3 py-5">
          <FilterCheckbox
            toggleFilter={toggleFilter}
            label="PLATS"
            options={["Gothenburg", "Outside_Gothenburg"]}
            name={["GÖTEBORG", "ANNAN PLATS"]}
            onChange={onFilterChange}
          ></FilterCheckbox>
        </div>
        <div className="border border-black border-solid px-3 py-5">
          <FilterCheckbox
            toggleFilter={toggleFilter}
            label="ANTAL LIA-PLATSER"
            options={["Two_or_fewer", "More_than_two"]}
            name={["1-2", "2-4"]}
            onChange={onFilterChange}
          />
        </div>
        <div className="px-3">
          <button
            onClick={handleClick}
            className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl w-full my-12 p-3"
          >
            Spara ändringar
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchFilterDesktop;
