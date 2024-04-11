import icon from "../assets/icons/mag-glass.svg";

const FreeSearch = ({ handleSearchInput }) => {
  return (
    <>
      <h2>Sök efter företag</h2>
      <div className="relative ">
        <input
          onChange={handleSearchInput}
          type="text"
          className="border border-black rounded-3xl my-4 p-3 text-sm w-full"
          placeholder="Sök efter företag"
        />
        <img
          className="absolute right-3 top-7 h-5"
          src={icon}
          alt="search icon"
        />
      </div>
    </>
  );
};
export default FreeSearch;
