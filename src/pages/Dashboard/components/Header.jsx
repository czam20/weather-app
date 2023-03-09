import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ForecastWeek } from "./ForecastWeek";
import { WeatherDetail } from "./WeatherDetail";
import "../../../styles/header.css";
import "../../../styles/styles.css";

const forecastWeek = [
  {
    day: 'Tues',
    temp: '29°C'
  },
  {
    day: 'Tues',
    temp: '29°C'
  },
  {
    day: 'Tues',
    temp: '29°C'
  },
  {
    day: 'Tues',
    temp: '29°C'
  }
]

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="container__side weather-side">
          <div className="weather-side__gradient"></div>
          <div className="weather-side__info">
            <div>
              <h3 className="subtitle-m">Tuesday</h3>
              <span className="content">15 jan 2019</span>
              <span className="content city">
                <FontAwesomeIcon icon={faLocationDot} size="sm" /> Paris, FR
              </span>
            </div>
            <div>
              <span className="content">
                <FontAwesomeIcon icon={faSun} size="3x" />
              </span>
              <h2 className="title">29°C</h2>
              <h3 className="subtitle-m">Sunny</h3>
            </div>
          </div>
        </div>
        <div className="container__side info-side">
          <div className="info-side__details">
            <div className="weather-details-container">
              <WeatherDetail title="High" description="32°C" />
              <WeatherDetail title="FL High" description="26°C" />
              <WeatherDetail title="Wind" description="0km/h" />
            </div>
            <div className="weather-details-container">
              <WeatherDetail title="Fl Flow" description="12°C" />
              <WeatherDetail title="Low" description="19°C" />
              <WeatherDetail title="Precipitation" description="0.08in" />
            </div>
          </div>
          <ForecastWeek data={forecastWeek} />
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
