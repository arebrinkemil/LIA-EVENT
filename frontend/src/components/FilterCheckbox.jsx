import { useState } from "react";
import RedStar from "../assets/icons/burgerStar.svg";

const FilterCheckbox = ({ label, options, toggleFilter, name }) => {
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    toggleFilter(event.target.value, isChecked);
  };
  return (
    <div>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input type="checkbox" value={option} onChange={handleChange} />
          <label> {name[index]}</label>
        </div>
      ))}
    </div>
  );
};
export default FilterCheckbox;
