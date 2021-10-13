import React, { useState } from "react";
import "../Assets/header.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  return (
    <header>
      <div className="header-left">
        <div className="mobile-menu">
          <div className="logo">
            send <span>Freight</span>
          </div>

          <button
            onClick={() => setIsMobileView(!isMobileView)}
            className="mobile-view-menu"
          >
            {isMobileView ? (
              <FaTimes className="menu-icon menu-close" />
            ) : (
              <FaBars className="menu-icon menu-open" />
            )}
          </button>
        </div>

        <div className="desktop search">
          <input
            className="search-field"
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          />
          <svg
            style={{ cursor: "pointer" }}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9999 21L16.6499 16.65"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        className={
          isMobileView ? "mobile-show mobile-menu-action" : "mobile-hide"
        }
      >
        <div className="search">
          <input
            className="search-field"
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          />

          <svg
            style={{ cursor: "pointer" }}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9999 21L16.6499 16.65"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className=" header-right">
          <button className="request-btn">Request quote</button>
          <button className="book-btn">Book shipment</button>
        </div>
      </div>

      <div className=" desktop header-right">
        <button className="request-btn">Request quote</button>
        <button className="book-btn">Book shipment</button>
      </div>
    </header>
  );
};

export default Header;
