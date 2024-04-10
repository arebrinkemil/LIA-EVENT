import { useNavigate } from "react-router-dom";

const RedButton = ({ path, children, type = "button", width }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <button
      className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl  mx-4 p-3"
      onClick={handleClick}
      style={{ width: width }}
    >
      {children}
    </button>
  );
};
export default RedButton;
