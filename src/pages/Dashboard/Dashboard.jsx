import React from "react";
import { useWeather } from "../../hooks/useWeather";
import { WeatherContextProvider } from "../../context/WeatherContext";
//components
import { Header } from "./components/Header";
import { ForecastDetails } from "./components/ForecastDetails";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

export const Dashboard = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) return <Loading />;

  if (error) return <Error />;

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
