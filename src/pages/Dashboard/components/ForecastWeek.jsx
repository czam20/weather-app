import React from "react";
import { ForeacastCard } from "./ForecastCard";
import "../../../styles/styles.css";
import "../../../styles/cards.css";

export const ForecastWeek = ({ data = [] }) => {
  return (
    <ul className="weather-forecast-container">
      {data.map((item, index) => (
        <li>
          <ForeacastCard day={item?.day} temp={item?.temp} key={index} />
        </li>
      ))}
    </ul>
  );
};
