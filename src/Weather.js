import React, { useState } from "react";
import axios from "axios";
import img from "./brightness-high.svg";

export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: Date(response.data.time),
      city: response.data.city,
    });
  }

  if (weather.ready) {
    return (
      <div className="container">
        <div className="formContainer">
          <form className="form">
            <div className="row">
              <div className="col-6">
                <input className="searchField form-control" type="text"></input>
              </div>
              <div className="col-4">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="row cityBlock">
          <div>
            <h1>{weather.city}</h1>
          </div>
          <ul className="weatherData">
            <li>{weather.date}</li>
            <li>{weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-2">
            <img src={img} alt="sunny" />
          </div>
          <div className="col-1 temperature">
            <h2>{weather.temperature}</h2>
          </div>
          <div className="col-2 degrees">
            <a href="#">°C</a> | <a href="#">°F</a>
          </div>
          <div className="col-4">
            <ul className="weatherDataIndex">
              <li>Feels like: {weather.feelsLike}°</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `50df61ta7co68388b9f4195d29abb711`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}
