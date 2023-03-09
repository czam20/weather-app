import React from "react";
import "../../../styles/styles.css";
import "../../../styles/cards.css";

export const WeatherDetail = ({ title, description, column = false }) => {
  return (
    <div className={column ? "weather-detail col" : "weather-detail"}>
      <h3 className="subtitle-s">{title}</h3>
      <span className="content">{description}</span>
    </div>
  );
};
