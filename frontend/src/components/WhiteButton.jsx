import { useNavigate } from "react-router-dom";

const RedButton = ({ path, children, type = "button" }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <button
      className=" border-[1px] font-bold text-xl flex justify-center align-middle rounded-3xl w-[calc(100vw-32px)] mx-4 p-3"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default RedButton;
