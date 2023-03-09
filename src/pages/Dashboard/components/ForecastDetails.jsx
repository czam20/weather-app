import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { WeatherDetail } from "./WeatherDetail";
import "../../../styles/styles.css";
import "../../../styles/cards.css";

export const ForecastDetails = () => {
  return (
    <div className="forecast-details">
      <WeatherDetail title="Thursday" description="3 pm" column/>
      <div>
        <span className="content">
          <FontAwesomeIcon icon={faSun} size="2x" />
        </span>
      </div>
      <WeatherDetail title="Temp" description="31°" column/>
      <WeatherDetail title="FL Temp" description="25°"column />
      <WeatherDetail title="Wind" description="6mph" column/>
      <WeatherDetail title="Precip" description="0in" column/>
    </div>
  );
};
