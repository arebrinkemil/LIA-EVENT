import { useState } from "react";
import RedStar from "../assets/icons/burgerStar.svg";

//TODO: lägg till individuell prop som identifierar vad som är checkat, för att använda i verklig filtrering

const FilterCheckbox = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className="flex flex-row items-center gap-2 pt-0 mt-2 hover:cursor-pointer">
      <div
        className="border border-black rounded-lg w-11 h-11"
        onClick={handleClick}
      >
        {isChecked && <img src={RedStar} alt="checked" />}
      </div>
      {children}
    </div>
  );
};
export default FilterCheckbox;
