import React from "react";
import "../Assets/Service.css";
import { FaPlane } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Service = () => {
  return (
    <div className="select-service">
      <h3>Select a service</h3>

      <div className="service-option">
        <div className="trans d-flex">
          Air Freight
          <FaPlane className="fa-plane" />
        </div>
        <div className="trans d-flex">
          Sea Freight
          <FaShip className="fa-ship" />
        </div>
        <div className="trans d-flex">
          Inland <br /> (Truck & Barge)
          <FaTruck className="fa-truck" />
        </div>
        <div className="trans d-flex">
          Custom <br /> Clearance
          <FaUser className="fa-user" />
        </div>
      </div>
    </div>
  );
};

export default Service;
