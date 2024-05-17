import React from "react";
import Rating from "./Rating";
import "./css/Header.css"

function Header() {
  return (
    <div className="header-rating-container">
    <header>
      <h1>10,000+ of our users love our products.</h1>
      <p>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </header>
    <Rating/>
    </div>

  );
}
export default Header;
