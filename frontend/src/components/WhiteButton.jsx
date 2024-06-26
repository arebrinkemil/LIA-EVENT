import { useNavigate } from "react-router-dom";

const WhiteButton = ({ path, children, type = "button", width }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <button
      className=" border-[1px] font-bold text-xl flex justify-center align-middle rounded-3xl p-3 hover:bg-redHover hover:border-redHover hover:text-white"
      onClick={handleClick}
      style={{ width: width }}
    >
      {children}
    </button>
  );
};
export default WhiteButton;
