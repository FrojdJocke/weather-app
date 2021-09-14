import { useEffect, useState } from 'react';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_END_CREDENTIALS =
  '&units=metric&appid=be2fb2fb9f1886110a24b46d6a9e9303';

const useWeather = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        let query = weather.city || 'Stockholm';
        const cityResponse = await fetch(
          `${API_BASE_URL}weather?q=${query}${API_END_CREDENTIALS}`
        );
        const cityJson = await cityResponse.json();

        const response = await fetch(
          `${API_BASE_URL}onecall?lat=${cityJson.coord.lat}&lon=${cityJson.coord.lon}${API_END_CREDENTIALS}`
        );
        let result = await response.json();

        const weatherData = Object.assign(result, { city: query });
        setWeather(weatherData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, [weather.city]);

  return { weather, setWeather };
};

export default useWeather;
