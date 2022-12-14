import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import { InfinitySpin } from "react-loader-spinner";

export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      icon: response.data.condition.icon,
      icon_url: response.data.condition.icon_url,
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = `50df61ta7co68388b9f4195d29abb711`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weather.ready) {
    return (
      <div className="container">
        <div className="formContainer">
          <form className="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  className="searchField form-control"
                  type="text"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-2">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weather} />
        <WeatherForecast city={weather.city} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <p>Loading...</p>;
        <InfinitySpin width="100" color="#808080" />
      </div>
    );
  }
}
