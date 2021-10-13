import React from "react";
import "../Assets/addServices.css";
import ToggleSwitch from "./ToggleSwitch";

const AdditionalServices = () => {
  return (
    <section className="additional-services">
      <h3>Additional Services</h3>

      <div className="add-options">
        <div className="grid-wrap">
          <div className="tog-option">
            <ToggleSwitch />

            <div className="text">
              <p className="lead">Export Forwarding</p>
              <p className="sub">
                We handle custom clearance and documentation
              </p>
            </div>
          </div>
        </div>

        <div className="grid-wrap">
          <div className="tog-option">
            <ToggleSwitch />

            <div className="text">
              <p className="lead">Import Custom Clearance</p>
              <p className="sub">
                We handle import custom and regulatory requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-wrap">
          <div className="tog-option">
            <div className="toggle-switch">
              <ToggleSwitch />
            </div>
            <div className="text">
              <p className="lead">Cargo Insurance</p>
              <p className="sub">
                Protect your cargo from logistics risk up to its full value.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-wrap third">
          <div className="tog-option">
            <div className="toggle-switch">
              <ToggleSwitch />
            </div>

            <div className="text">
              <p className="lead">Transport/ Delivery</p>
              <p className="sub">
                We deliver the cargo to your door step from the ports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
