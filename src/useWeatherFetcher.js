import { useEffect } from 'react';
import axios from "axios";
const API_KEY = "b7375b0327142d3b2088dd8bfe0cff37";

export async function useWeatherFetcher(cityName, units) {

  useEffect(() => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${units}`)

    const weather = {
      main: response.data.weather[0].main,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temp: Math.round(response.data.main.temp)
    }
    return weather

  }, [cityName, units])
};