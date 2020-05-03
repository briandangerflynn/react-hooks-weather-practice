const CONSTANTS = {
  SET_UNITS_IMPERIAL: "SET_UNITS_IMPERIAL",
  SET_UNITS_METRIC: "SET_UNITS_METRIC",
  SET_CITY_NAME: "SET_CITY_NAME",
  SET_FETCH_CURRENT: "SET_FETCH_CURRENT",
  SET_FETCH_FORECAST: "SET_FETCH_FORECAST",
  SET_WEATHER_DATA: "SET_WEATHER_DATA",
  SET_FORECAST_DATA: "SET_FORECAST_DATA",
  SET_LIGHT_THEME: "SET_LIGHT_THEME",
  SET_DARK_THEME: "SET_DARK_THEME"
}

export const reducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.SET_UNITS_IMPERIAL:
      return {
        ...state,
        units: "imperial"
      };
    case CONSTANTS.SET_UNITS_METRIC:
      return {
        ...state,
        units: "metric"
      };
    case CONSTANTS.SET_CITY_NAME:
      return {
        ...state,
        cityName: action.cityName
      };
    case CONSTANTS.SET_FETCH_CURRENT:
      return {
        ...state,
        fetchType: "current"
      };
    case CONSTANTS.SET_FETCH_FORECAST:
      return {
        ...state,
        fetchType: "forecast"
      };
    case CONSTANTS.SET_WEATHER_DATA:
      return {
        ...state,
        weather: action.weather
      };
    case CONSTANTS.SET_FORECAST_DATA:
      return {
        ...state,
        forecast: action.forecast
      };
    case CONSTANTS.SET_LIGHT_THEME:
      return {
        ...state,
        theme: "light"
      };
    case CONSTANTS.SET_DARK_THEME:
      return {
        ...state,
        theme: "dark"
      };
    default:
      return {
        ...state
      };
  }
}