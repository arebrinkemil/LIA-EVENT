import { useState } from "react";
import FilterIcon from "../assets/icons/filter-default.svg";
import Line from "./HorizontalLine";
import FilterCheckbox from "./FilterCheckbox";

const SearchFilter = ({ onFilterChange, setFilters, toggleFilter }) => {
  const [isFilterShown, setIsFilterShown] = useState(false);
  const handleClick = () => {
    setIsFilterShown((prev) => !prev);
  };
  return (
    <>
      <section className="mx-4 my-2 p-5 text-xl border border-black">
        <h2>Sök efter företag</h2>
        <input
          type="text"
          className="border border-black rounded-3xl my-4 p-3 text-sm w-full"
          placeholder="Sök efter företag"
        />
        <div className="relative">
          <div className="flex flex-row justify-between items-center">
            Filtrera företag
            <img onClick={handleClick} src={FilterIcon} alt="filter" />
          </div>
        </div>
      </section>
      <div
        className={`absolute w-screen z-10 top-10 -right-4 bg-white flex flex-col justify-center transition-transform duration-500 ease-in-out transform ${
          isFilterShown ? "" : "translate-x-full"
        }`}
      >
        <div className="h-10"></div>
        <h2 className="text-4xl">Filtrera</h2>
        <p>
          Nedan kan du anpassa vilka företag som skall visas i din vy genom att
          kryssa i eller ur check-rutan.
        </p>
        <Line></Line>
        <FilterCheckbox
          toggleFilter={toggleFilter}
          label="YRKE"
          options={["Designer", "Webdeveloper"]}
          name={["DIGITAL DESIGNER", "WEBBUTVECKLARE"]}
          onChange={onFilterChange}
        ></FilterCheckbox>
        <Line></Line>
        <FilterCheckbox
          toggleFilter={toggleFilter}
          label="PLATS"
          options={["Gothenburg", "Outside_Gothenburg"]}
          name={["GÖTEBORG", "ANNAN PLATS"]}
          onChange={onFilterChange}
        ></FilterCheckbox>
        <Line></Line>
        <FilterCheckbox
          toggleFilter={toggleFilter}
          label="ANTAL LIA-PLATSER"
          options={["Two_or_fewer", "More_than_two"]}
          name={["1-2", "2-4"]}
          onChange={onFilterChange}
        />
        <Line></Line>
        <button
          onClick={handleClick}
          className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl w-[calc(100vw-32px)] my-12 p-3"
        >
          Spara ändringar
        </button>
      </div>
    </>
  );
};
export default SearchFilter;
