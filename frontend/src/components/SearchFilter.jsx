import FilterIcon from "../assets/icons/filter-default.svg";

const SearchFilter = () => {
  return (
    <>
      <section className="mx-4 p-5 text-xl border border-black">
        <h2>Sök efter företag</h2>
        <input
          type="text"
          className="border border-black rounded-3xl my-4 p-3 text-sm w-full"
          placeholder="Sök efter företag"
        />
        <div className="flex flex-row justify-between items-center">
          Filtrera företag
          <img src={FilterIcon} alt="filter" />
        </div>
      </section>
    </>
  );
};
export default SearchFilter;
