import React, { useContext } from "react";
import { WeatherContext } from "../../../context/WeatherContext";
//components
import { ForecastWeek } from "./ForecastWeek";
import { WeatherDetail } from "./WeatherDetail";
//styles
import "../../../styles/header.css";
import "../../../styles/styles.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
//utils
import {
  dayFormatter,
  dateTimezoneFormatter,
} from "../../../utils/formatterDate";

export const Header = () => {
  const { current, daily } = useContext(WeatherContext);

  return (
    <div className="header">
      <div className="header__container">
        <div className="container__side weather-side">
          <div className="weather-side__gradient"></div>
          <div className="weather-side__info">
            <div>
              <h3 className="subtitle-m">
                {dayFormatter.format(current?.timestamp)}
              </h3>
              <span className="content">
                {dateTimezoneFormatter.format(current?.timestamp)}
              </span>
            </div>
            <div>
              <span className="content">
                <FontAwesomeIcon icon={faSun} size="3x" />
              </span>
              <h2 className="title">{`${current?.currentTemp}°C`}</h2>
              {/* <h3 className="subtitle-m">Sunny</h3> */}
            </div>
          </div>
        </div>
        <div className="container__side info-side">
          <div className="info-side__details">
            <div className="weather-details-container">
              <WeatherDetail
                title="High"
                description={`${current?.highTemp}°C`}
              />
              <WeatherDetail
                title="FL High"
                description={`${current?.highFeelsLike}°C`}
              />
              <WeatherDetail
                title="Wind"
                description={`${current?.windSpeed}km/h`}
              />
            </div>
            <div className="weather-details-container">
              <WeatherDetail
                title="Fl Low"
                description={`${current?.lowFeelsLike}°C`}
              />
              <WeatherDetail
                title="Low"
                description={`${current?.lowTemp}°C`}
              />
              <WeatherDetail
                title="Precipitation"
                description={`${current?.precipitation}mm`}
              />
            </div>
          </div>
          <ForecastWeek data={daily} />
          {/* <div>
            <button className="location-btn">
              <span>
                <FontAwesomeIcon icon={faLocationDot} size="m" /> Change
                location
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
