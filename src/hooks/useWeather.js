import { useEffect, useState } from "react";
import { getWeather } from "../api/weather";

export const useWeather = (initialValue = null) => {
  const [weatherData, setWeatherData] = useState(initialValue);

  useEffect(() => {
    getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
      (data) => {
        setWeatherData(data);
      }
    );
  }, []);

  return { weatherData };
};
