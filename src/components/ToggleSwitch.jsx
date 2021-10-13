import React from "react";
import "../Assets/toggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <label>
      <input type="checkbox" />
      <span className="switch">Toggle</span>
    </label>
  );
};

export default ToggleSwitch;
