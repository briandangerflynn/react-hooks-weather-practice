import React, { useEffect, useContext } from "react";
import { Context } from "../store.js";
import { fetchWeather, fetchForecast } from "../utils.js";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import Header from "./Header";
import Nav from "./Nav";
import "../App.css";

function App() {
  const [state, dispatch] = useContext(Context);
  const { units, cityName, theme, fetchType } = state;

  const currentTheme = theme === "light" ?
    {
      color: "#000",
      backgroundColor: "#fff",
      borderColor: "black"
    } : {
      color: "#fff",
      backgroundColor: "#333",
      borderColor: "white"
    };

  const getWeatherData = async (cityName, units) => {
    const weatherData = await fetchWeather(cityName, units)
    dispatch({ type: "SET_WEATHER_DATA", weather: weatherData })
  }

  const getForecastData = async (cityName, units) => {
    const forecastData = await fetchForecast(cityName, units)
    dispatch({ type: "SET_FORECAST_DATA", forecast: forecastData })
  }

  useEffect(() => {
    const lastSearch = document.location.hash.slice(1).replace(/%20/g, " ")
    if (lastSearch) {
      dispatch({ type: "SET_CITY_NAME", cityName: lastSearch })
      getWeatherData(lastSearch, units)
      getForecastData(lastSearch, units)
    }
  }, [units])

  const getWeather = async () => {
    if (cityName) {
      getWeatherData(cityName, units)
      getForecastData(cityName, units)
      document.location.hash = cityName
    }
  }

  return (
    <main style={currentTheme}>
      <Header getWeather={getWeather} />
      <Nav theme={theme} />
      {
        fetchType === "current" ?
          <CurrentWeather />
          :
          <WeatherForecast />
      }
    </main>
  )
}

export default App;
