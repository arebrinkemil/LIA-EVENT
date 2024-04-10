import React, { useState } from "react";
import CheckboxChecked from "../assets/icons/checkbox-checked.svg";
import CheckboxUnchecked from "../assets/icons/checkbox-unchecked.svg";

const FilterCheckbox = ({ label, options, toggleFilter, name }) => {
  const [checkedStates, setCheckedStates] = useState(options.map(() => false));
  const handleChange = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
    toggleFilter(options[index], newCheckedStates[index]);
  };

  return (
    <div>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <label className="flex flex-row gap-3 items-center mb-2">
            <input
              type="checkbox"
              checked={checkedStates[index]}
              onChange={() => handleChange(index)}
              style={{ display: "none" }}
            />
            {checkedStates[index] ? (
              <img src={CheckboxChecked} alt="" />
            ) : (
              <img src={CheckboxUnchecked} alt="" />
            )}
            {name[index]}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckbox;
