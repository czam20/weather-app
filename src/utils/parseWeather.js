export const parseCurrentWeather = ({ current_weather, daily }) => {
  const { temperature, windspeed, weathercode } = current_weather;

  const {
    temperature_2m_max: [maxTemp],
    temperature_2m_min: [minTemp],
    apparent_temperature_max: [maxFeelsLike],
    apparent_temperature_min: [minFeelsLike],
    precipitation_sum: [precipitation],
  } = daily;
  return {
    currentTemp: temperature,
    highTemp: maxTemp,
    lowTemp: minTemp,
    highFeelsLike: maxFeelsLike,
    lowFeelsLike: minFeelsLike,
    windSpeed: windspeed,
    precipitation: (precipitation * 100) / 100,
    iconCode: weathercode,
  };
};

export const parseDailyWeather = ({ daily }) => {
  return daily.time.map((time, index) => {
    return {
      timestamp: time * 1000,
      iconCode: daily.weathercode[index],
      maxTemp: daily.temperature_2m_max[index],
    };
  });
};

export const parseHourlyWeather = ({ hourly, current_weather }) => {
  return hourly.time
    .map((time, index) => {
      return {
        timestamp: time * 1000,
        iconCode: hourly.weathercode[index],
        temperature: hourly.temperature_2m[index],
        feelsLike: hourly.apparent_temperature[index],
        windSpeed: hourly.windspeed_10m[index],
        precipitation: (hourly.precipitation_probability[index] * 100) / 100,
      };
    })
    .filter(({ timestamp }) => timestamp >= current_weather.time * 1000);
};
