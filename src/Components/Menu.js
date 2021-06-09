import React from "react";
// import { SchlerotiniaRiskCal } from "./SchlerotiniaRiskCal";
import { Link } from "react-router-dom";
import "../Styles/menu.css";

export const Menu = () => {
  return (
    <div>
      <h1 className="heading">Menu</h1>
      <div className="menu">
        <Link to="/sclerotinia-risk-calculator">
          <button className="menu-calculators">
            Sclerotinia Risk Calculator
            <br />
            With/Without Field Identification{" "}
          </button>
        </Link>

        <Link to="/economic-calculator">
          <button className="menu-calculators">
            Calculation of Economic <br /> threshold
          </button>
        </Link>
        <Link to="/disease-serverity-workbook">
          <button className="menu-calculators">
            Download Disease Severity <br />
            Workbook
          </button>
        </Link>
      </div>
      <div className="menu">
        <Link to="/sclerotinia-rating-scale">
          <button className="menu-calculators">
            Sclerotinia Rating Method
          </button>
        </Link>
        <Link to="/youtube-video">
          <button className="menu-calculators">
            Youtube Video of <br /> Rating Method
          </button>
        </Link>
        <Link to="/photo-gallery">
          <button className="menu-calculators">Photo Gallery</button>
        </Link>
      </div>
    </div>
  );
};
