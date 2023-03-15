import { createContext } from "react";

export const WeatherContext = createContext({
  current: {},
  daily: {},
  hourly: {},
});

export const WeatherContextProvider = ({
  current,
  daily,
  hourly,
  ...props
}) => {
  return (
    <WeatherContext.Provider value={{ current, daily, hourly }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
