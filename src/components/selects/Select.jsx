import React from "react";

const Select = ({ label, options, onChange }) => {
  return (
    <div className="select">
      {options[0].icon && <i className={options[0].icon}></i>}
      <select onChange={onChange}>
        <option value="">{label}</option>
        {options.slice(1).map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
