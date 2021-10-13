import React from "react";
import "../Assets/pageTitle.css";

const PageTitle = () => {
  return (
    <div className="page-title">
      <div className="heading">
        <div className="arrow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5"
              stroke="#25282B"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="#25282B"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="text">
          <h2>New Booking</h2>
          <p>
            Fill in the information below to get a quote or create a new booking
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
