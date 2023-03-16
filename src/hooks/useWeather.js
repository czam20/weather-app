import { useEffect, useState } from "react";
import { getWeather } from "../api/weather";

export const useWeather = (initialValue = null) => {
  const [weatherData, setWeatherData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return { weatherData, loading, error };
};
