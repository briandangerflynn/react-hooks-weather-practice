import React, { useContext } from 'react';
import { Context } from "../store.js";

export default function Header({ getWeather }) {
  const [{ cityName }, dispatch] = useContext(Context);

  return (
    <header>
      <h1>Weather</h1>
      <input
        type="text"
        placeholder={cityName || "Enter city..."}
        onChange={e => dispatch({
          type: "SET_CITY_NAME",
          cityName: e.currentTarget.value
        })}
      />
      <button onClick={getWeather}>Get Weather</button>
    </header>
  )
}