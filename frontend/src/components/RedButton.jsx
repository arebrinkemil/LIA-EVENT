import { useNavigate } from "react-router-dom";

const RedButton = ({ path, children, type = "button" }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <button
      className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl w-[calc(100vw-32px)] mx-4 my-12 p-3"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default RedButton;
