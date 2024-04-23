import { useNavigate } from "react-router-dom";

const NavButton = ({ path, children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <button className="hover:font-bold" onClick={handleClick}>
      {children}
    </button>
  );
};
export default NavButton;
