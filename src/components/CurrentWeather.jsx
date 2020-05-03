import React, { useContext } from 'react';
import { Context } from "../store.js";

export default function CurrentWeather() {
  const [state] = useContext(Context);
  const { cityName, units, weather } = state;
  const unitsSymbol = units === "imperial" ? "F" : "C";

  return (
    <div className="forecast">
      {
        cityName &&
        weather &&

        <div className="weather-card">
          <h3>{cityName}</h3>
          <img src={weather.icon} alt="weather icon" />
          <p>{weather.temp}&deg;{unitsSymbol}</p>
          <p>{weather.description}</p>
        </div>
      }
    </div>
  )
}