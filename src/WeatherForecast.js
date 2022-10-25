import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
