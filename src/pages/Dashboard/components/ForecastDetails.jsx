import React, { useContext } from "react";
import { WeatherContext } from "../../../context/WeatherContext";
//components
import { ForecastHourlyCard } from "./ForecastHourlyCard";
//styles
import "../../../styles/styles.css";
import "../../../styles/cards.css";
//utils
import { dayFormatter, hourFormatter } from "../../../utils/formatterDate";

export const ForecastDetails = () => {
  const { hourly } = useContext(WeatherContext);

  return (
    <ul className="forecast-details">
      {hourly?.map(( data, index ) => {
        return (
          <ForecastHourlyCard
            day={dayFormatter.format(data?.timestamp)}
            hour={hourFormatter.format(data?.timestamp)}
            temperature={data?.temperature}
            feelsLike={data?.feelsLike}
            windSpeed={data?.windSpeed}
            precipitation={data?.precipitation}
            key={data?.timestamp}
          />
        );
      })}
    </ul>
  );
};
