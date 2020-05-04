import React, { useContext } from 'react';
import { Context } from "../store.js";

export default function WeatherForecast() {
  const [state] = useContext(Context);
  const { cityName, units, forecast } = state;
  const unitsSymbol = units === "imperial" ? "F" : "C";

  return (
    <div className="forecast">
      {
        cityName && forecast.map((weather, index) => (
          <div key={index} className="weather-card">
            <h3>{cityName}</h3>
            <img src={weather.icon} alt="weather icon" />
            <p>{weather.temp}&deg;{unitsSymbol}</p>
            <p>{weather.description}</p>
          </div>
        ))
      }
    </div>
  )
}