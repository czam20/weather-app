import React from "react";
import { Header } from "./components/Header";
import { ForecastDetails } from "./components/ForecastDetails";
import { useWeather } from "../../hooks/useWeather";
import { WeatherContextProvider } from "../../context/WeatherContext";

export const Dashboard = () => {
  const { weatherData } = useWeather();
  return (
    <WeatherContextProvider
      current={weatherData?.current}
      daily={weatherData?.daily}
      hourly={weatherData?.hourly}
    >
      <Header />
      <div>
        <ForecastDetails />
      </div>
    </WeatherContextProvider>
  );
};
