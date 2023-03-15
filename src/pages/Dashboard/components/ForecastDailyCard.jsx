import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/cards.css";

export const ForecastDailyCard = ({day = "", temp = "", active = false}) => {
  return (
    <div className={active? "forecast-card active" : "forecast-card"}>
      <span className="forecast-card__icon">
        <FontAwesomeIcon icon={faSun} size="2x" />
      </span>
      <span className="forecast-card__day">{day}</span>
      <span className="forecast-card__temp">{`${temp}°C`}</span>
    </div>
  );
};
