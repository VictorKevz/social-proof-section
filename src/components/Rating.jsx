import React from "react";
import iconStar from "../assets/images/icon-star.svg";
import "./css/Header.css";
import "./css/Rating.css";

function Rating() {
  const stars = [];

  // Loop to create 5 star icons
  for (let i = 0; i < 5; i++) {
    stars.push(<img key={i} src={iconStar} alt="icon-star" />);
  }

  // Render the array of star icons
  return (
    <section className="ratings-container">
      <div className="item reviews">
        <div className="star-container">
          {stars}
          <span className="rating-comment">Rated 5 Stars in Reviews</span>
        </div>
      </div>
      <div className="item report-guru">
        <div className="star-container">
          {stars}
          <span className="rating-comment">Rated 5 Stars in Report Guru</span>
        </div>
      </div>
      <div className="item best-tech">
        <div className="star-container">
          {stars}{" "}
          <span className="rating-comment">Rated 5 Stars in BestTech</span>
        </div>
      </div>
    </section>
  );
}

export default Rating;
