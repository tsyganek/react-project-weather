import React, { useState } from "react";
import axios from "axios";
import img from "./brightness-high.svg";

export default function Weather() {
  const [ready, setReady] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [feelsLike, setFeelsLike] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let city = "Kyiv";

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.temperature.current));
    setDescription(response.data.condition.description);
    setFeelsLike(Math.round(response.data.temperature.feels_like));
    setHumidity(response.data.temperature.humidity);
    setReady(true);
  }

  if (ready) {
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
            <h1>{city}</h1>
          </div>
          <ul className="weatherData">
            <li>Tuesday, 14.00</li>
            <li>{description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-2">
            <img src={img} alt="sunny" />
          </div>
          <div className="col-1 temperature">
            <h2>{temperature}</h2>
          </div>
          <div className="col-2 degrees">
            <a href="#">°C</a> | <a href="#">°F</a>
          </div>
          <div className="col-4">
            <ul className="weatherDataIndex">
              <li>Feels like: {feelsLike}</li>
              <li>Humidity: {humidity}%</li>
              <li>Wind: 19 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `50df61ta7co68388b9f4195d29abb711`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}
