import React from "react";
import "../Assets/cargoServices.css";
import ToggleSwitch from "./ToggleSwitch";

const CargoServices = () => {
  return (
    <div className="cargo-services">
      <div className="title">
        <div className="heading">
          <h3>Cargo Details</h3>
        </div>

        <div className="group">
          <ToggleSwitch />
          <p className="group-text">Dangerous Cargo (ex. Chemicals, Battery)</p>
        </div>
      </div>

      <div className="slide-btn">
        <button className="active">Total Dimensions</button>
        <button>Package Details</button>
      </div>

      <div className="fieldset-wrap">
        <fieldset>
          <legend>Total Volume</legend>
          <input type="text" name="" id="" />
          <label htmlFor="cbm">cbm</label>
        </fieldset>
        <fieldset>
          <legend>Total Weight</legend>
          <input type="text" name="" id="" />
          <label htmlFor="kg">kg</label>
        </fieldset>
      </div>
    </div>
  );
};

export default CargoServices;
