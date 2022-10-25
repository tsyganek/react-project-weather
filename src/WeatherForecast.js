import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  console.log(props);
  let apiKey = "50df61ta7co68388b9f4195d29abb711";
  let lat = props.latitude;
  let lon = props.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

  function handleResponse(response) {
    console.log(response.data);
  }

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecastWeather-container">
      <div className="row">
        <div className="col">
          <h4 className="forecastWeather-day">Day</h4>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperature-max">
            <span className="col WeatherForecast-temperature-max">10° </span>
            <span className="col WeatherForecast-temperature-min"> 20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
