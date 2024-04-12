"use client";
import React, { useState } from "react";
import "./Checkbox.css";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange && onChange(newChecked);
  };

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="checkbox-input"
      />
      <span className="checkbox-checkmark"></span>
      <span className={`checkbox-label ${checked ? "checked" : ""}`}>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
