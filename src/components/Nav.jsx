import React, { useContext, useState } from 'react';
import { Context } from '../store';

export default function Nav(props) {
  const [state, dispatch] = useContext(Context);
  const { units } = state;

  const [activeUnits, setActiveUnits] = useState(units)
  const [activeTheme, setActiveTheme] = useState(props.theme)
  const [activeWeather, setActiveWeather] = useState("current")

  const handleClick = (type, setFunc, e) => {
    dispatch({ type: type })
    setFunc(e.target.id)
  }

  return (
    <nav>
      <button
        id="imperial"
        className={`left-button ${activeUnits === "imperial" ? "active" : ""}`}
        onClick={(e) => { handleClick("SET_UNITS_IMPERIAL", setActiveUnits, e) }}>
        F&deg;
      </button>

      <button
        id="metric"
        className={`right-button ${activeUnits === "metric" ? "active" : ""}`}
        onClick={(e) => { handleClick("SET_UNITS_METRIC", setActiveUnits, e) }}>
        C&deg;
      </button>

      <button
        id="light"
        className={`left-button ${activeTheme === "light" ? "active" : ""}`}
        onClick={(e) => { handleClick("SET_LIGHT_THEME", setActiveTheme, e) }}>
        Light
      </button>

      <button
        id="dark"
        className={`right-button ${activeTheme === "dark" ? "active" : ""}`}
        onClick={(e) => { handleClick("SET_DARK_THEME", setActiveTheme, e) }}>
        Dark
      </button>

      <button
        id="current"
        className={`left-button ${activeWeather === "current" ? "active" : ""}`}
        onClick={(e) => setActiveWeather(e.target.id)}>
        Current
      </button>

      <button
        id="forecast"
        className={`right-button ${activeWeather === "forecast" ? "active" : ""}`}
        onClick={(e) => setActiveWeather(e.target.id)}>
        Forecast
      </button>
    </nav >
  )
}