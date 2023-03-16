import React from "react";
//components
import { WeatherDetail } from "./WeatherDetail";
//styles
import "../../../styles/styles.css";
import "../../../styles/cards.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICON_MAP } from "../../../assets/icons/iconMap";

export const ForecastHourlyCard = ({
  day,
  hour,
  temperature,
  feelsLike,
  windSpeed,
  precipitation,
  iconCode
}) => {
  return (
    <div className="forecast-hourly">
      <WeatherDetail title={day} description={hour} column />
      <div className="weather-detail">
        <span>
          <FontAwesomeIcon icon={ICON_MAP.get(iconCode)} size="2x" />
        </span>
      </div>
      <WeatherDetail title="Temp" description={`${temperature}°C`} column />
      <WeatherDetail title="FL Temp" description={`${feelsLike}°C`} column />
      <WeatherDetail title="Wind" description={`${windSpeed}km/h`} column />
      <WeatherDetail title="Precip" description={`${precipitation}mm`} column />
    </div>
  );
};
