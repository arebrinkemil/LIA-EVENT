import { useState } from "react";
import FilterIcon from "../assets/icons/filter-default.svg";
import FilterCheckbox from "./FilterCheckbox";
import FreeSearch from "./FreeSearch";

const SearchFilter = ({
  onFilterChange,
  setFilters,
  toggleFilter,
  handleSearchInput,
}) => {
  const [isFilterShown, setIsFilterShown] = useState(false);
  const handleClick = () => {
    setIsFilterShown((prev) => !prev);
  };
  return (
    <>
      <section className="my-2 p-5 text-xl border border-black">
        <FreeSearch handleSearchInput={handleSearchInput} />
        <div className="relative">
          <div className="flex flex-row justify-between items-center">
            Filtrera företag
            <img onClick={handleClick} src={FilterIcon} alt="filter" />
          </div>
        </div>
      </section>
      <div
        className={`absolute w-screen z-10 top-10 -right-0 bg-white flex flex-col justify-center transition-transform duration-500 ease-in-out transform ${
          isFilterShown ? "" : "translate-x-full"
        }`}
      >
        <div className="h-10"></div>
        <div className="border border-black border-solid m-0 px-3">
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
            name={["MELLAN 1 OCH 2", "2 ELLER FLER"]}
            onChange={onFilterChange}
          />
        </div>
        <div className="px-3">
          <button
            onClick={handleClick}
            className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl w-[calc(100vw-32px)] my-12 p-3"
          >
            Spara ändringar
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchFilter;
