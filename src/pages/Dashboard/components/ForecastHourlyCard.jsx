import React from "react";
//components
import { WeatherDetail } from "./WeatherDetail";
//styles
import "../../../styles/styles.css";
import "../../../styles/cards.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export const ForecastHourlyCard = ({
  day,
  hour,
  temperature,
  feelsLike,
  windSpeed,
  precipitation,
}) => {
  return (
    <div className="forecast-details">
      <WeatherDetail title={day} description={hour} column />
      <div>
        <span className="content">
          <FontAwesomeIcon icon={faSun} size="2x" />
        </span>
      </div>
      <WeatherDetail title="Temp" description={`${temperature}°C`} column />
      <WeatherDetail title="FL Temp" description={`${feelsLike}°C`} column />
      <WeatherDetail title="Wind" description={`${windSpeed}km/h`} column />
      <WeatherDetail title="Precip" description={`${precipitation}°C`} column />
    </div>
  );
};
