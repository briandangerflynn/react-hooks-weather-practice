import React, { useEffect, useContext } from "react";
import { Context } from "../store.js";
import { fetchWeather } from "../utils.js";
import CurrentWeather from "./CurrentWeather";
import Header from "./Header";
import Nav from "./Nav";
import "../App.css";

function App() {
  const [state, dispatch] = useContext(Context);
  const { units, cityName, theme } = state;

  const currentTheme = theme === "light" ?
    {
      color: "#000",
      backgroundColor: "#fff"
    } : {
      color: "#fff",
      backgroundColor: "#333"
    };

  const getWeatherData = async (cityName, units) => {
    const weatherData = await fetchWeather(cityName, units)
    dispatch({ type: "SET_WEATHER", weather: weatherData })
  }

  useEffect(() => {
    const lastSearch = document.location.hash.slice(1).replace(/%20/g, " ")
    if (lastSearch) {
      dispatch({ type: "SET_CITY_NAME", cityName: lastSearch })
      getWeatherData(lastSearch, units)
    }
  }, [units])

  const getWeather = async () => {
    if (cityName) {
      getWeatherData(cityName, units)
      document.location.hash = cityName
    }
  }

  return (
    <main style={currentTheme}>
      <Header
        getWeather={getWeather}
      />
      <Nav
        theme={theme}
      />
      <CurrentWeather />
    </main>
  )
}

export default App;
