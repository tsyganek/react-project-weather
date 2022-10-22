import React, { useState } from "react";
import axios from "axios";
import img from "./brightness-high.svg";
import FriendlyDate from "./FriendlyDate.js";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false });

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
    });
  }

  if (weather.ready) {
    return (
      <div className="container">
        <div className="formContainer">
          <form className="form">
            <div className="row">
              <div className="col-9">
                <input className="searchField form-control" type="text"></input>
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
      </div>
    );
  } else {
    let apiKey = `50df61ta7co68388b9f4195d29abb711`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}
