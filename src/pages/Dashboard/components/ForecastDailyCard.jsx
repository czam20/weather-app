import React from "react";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICON_MAP } from "../../../assets/icons/iconMap";
//styles
import "../../../styles/cards.css";

export const ForecastDailyCard = ({
  day = "",
  temp = "",
  active = false,
  iconCode = "",
}) => {
  return (
    <div className={active ? "forecast-card active" : "forecast-card"}>
      <span className="forecast-card__icon">
        <FontAwesomeIcon icon={ICON_MAP.get(iconCode)} size="2x" />
      </span>
      <span className="forecast-card__day">{day}</span>
      <span className="forecast-card__temp">{`${temp}°C`}</span>
    </div>
  );
};
