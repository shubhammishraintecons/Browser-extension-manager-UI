// src/components/ToggleSwitch.jsx
import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({isActive, handleToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isActive} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
