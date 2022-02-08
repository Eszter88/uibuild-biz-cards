import React from "react";
import BusinessCard from "./BusinessCard";

function BusinessCards() {
  return (
    <div className="body">
      <div classname="cardListContainer">
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
      </div>
    </div>
  );
}

export default BusinessCards;
