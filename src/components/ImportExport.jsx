import React from "react";
import "../Assets/importExport.css";

const ImportExport = () => {
  return (
    <div className="import-export">
      <div className="detail-icon" style={{ cursor: "pointer" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#25282B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 8V12"
            stroke="#25282B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 16H12.01"
            stroke="#25282B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="top-option">
        <div className="buttons">
          <button>Import</button>
          <button>Export</button>
        </div>

        <div className="locat-from">
          <div className="locat-dir d-flex-ac">
            <div className="group-icon d-flex-ac">
              <svg
                width="20"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="#010101"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#010101"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-dir">From</p>
            </div>

            <input
              type="text"
              name="location-to"
              id="location-from"
              placeholder="City or port"
            />
          </div>
        </div>

        <div className="locat-to">
          <div className="locat-dir d-flex-ac">
            <div className="group-icon d-flex-ac">
              <svg
                width="20"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="#010101"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#010101"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-dir">To</p>
            </div>

            <input
              type="text"
              name="location-to"
              id="location-from"
              placeholder="City or port"
            />
          </div>
        </div>
      </div>

      <div className="bottom-option">
        <div className="bottom-grid-wrap">
          <div className="bottom-input d-flex-ac">
            <svg
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="#25282B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="#25282B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="#25282B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="#25282B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              type="text"
              name="ready-date"
              id="ready-date"
              placeholder="Ready Date"
            />
          </div>
        </div>

        <div className="bottom-grid-wrap">
          <div className="bottom-input d-flex-ac">
            <select name="terms" id="terms">
              <option>Incoterms</option>
              <option value="opt1">Opt 1</option>
              <option value="opt2">Opt 2</option>
              <option value="opt3">Opt 3</option>
            </select>
          </div>
        </div>

        <div className="bottom-grid-wrap">
          <div className="bottom-input d-flex-ac">
            <input
              type="text"
              name="ready-date"
              id="ready-date"
              placeholder="Total Cargo Value"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportExport;
