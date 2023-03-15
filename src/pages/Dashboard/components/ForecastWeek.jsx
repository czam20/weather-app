import React from "react";
//components
import { ForecastDailyCard } from "./ForecastDailyCard";
//styles
import "../../../styles/styles.css";
import "../../../styles/cards.css";
//utils
import { dayFormatter } from "../../../utils/formatterDate";

export const ForecastWeek = ({ data = [] }) => {
  return (
    <ul className="weather-forecast-container">
      {data.map((day, index) => (
        <li>
          <ForecastDailyCard
            day={dayFormatter.format(day?.timestamp)}
            temp={day?.maxTemp}
            key={index}
          />
        </li>
      ))}
    </ul>
  );
};
