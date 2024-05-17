import React from "react";
import Data from "../Data";
import "./css/Testimonial.css";

function Testimonial({ id, name, profile, verification, review }) {
  const checkClassName = () => {
    if (id == 1) {
      return "card first";
    } else if (id == 2) {
      return "card second";
    } else if (id == 3) {
      return "card third";
    }
  };
  return (
    <>
        <div className={checkClassName()}>
          <div className="profile-container">
            <img src={profile} alt="profile-picture" />
            <h3>
              {name}
              <span className="verification">{verification}</span>
            </h3>
          </div>
          <p>"{review}"</p>
        </div>
    </>
  );
}

export default Testimonial;
