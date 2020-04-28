import axios from "axios";
const API_KEY = "b7375b0327142d3b2088dd8bfe0cff37";


const fetchWeather = async (cityName, units) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${units}`)

  const weather = {
    main: response.data.weather[0].main,
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    temp: Math.round(response.data.main.temp)
  }
  return weather
};

const fetchForecast = async cityName => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=5&appid=${API_KEY}&units=imperial`)
  const forecast = response.data.list
  return forecast
}


export {
  fetchWeather,
  fetchForecast
}


  // const forecast = {
  //   main: forecastData.weather[0].main,
  //   description: forecastData.weather[0].description,
  //   icon: `http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`,
  //   temp: Math.round(forecastData.temp.max)
  // }