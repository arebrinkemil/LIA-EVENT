import Arrow from "../assets/icons/arrow_downward.svg";

const ArrowsDown = () => {
  return (
    <>
      <div className="flex flex-row animate-arrowUpDown my-6">
        <img
          src={Arrow}
          alt="arrow pointing down"
          className="flex-grow max-w-full max-h-full h-11 w-11"
        />
        <img
          src={Arrow}
          alt="arrow pointing down"
          className="flex-grow max-w-full max-h-full h-11 w-11"
        />
        <img
          src={Arrow}
          alt="arrow pointing down"
          className="flex-grow max-w-full max-h-full h-11 w-11"
        />
        <img
          src={Arrow}
          alt="arrow pointing down"
          className="flex-grow max-w-full max-h-full h-11 w-11"
        />
        <img
          src={Arrow}
          alt="arrow pointing down"
          className="flex-grow max-w-full max-h-full h-11 w-11"
        />
      </div>
    </>
  );
};
export default ArrowsDown;
