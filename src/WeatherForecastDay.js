import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.forecast.temperature.maximum);
    return `${maxTemp}`;
  }

  function minTemp() {
    let minTemp = Math.round(props.forecast.temperature.minimum);
    return `${minTemp}`;
  }

  function getDateDay() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = new Date(props.forecast.time * 1000).getDay();

    return days[day];
  }

  return (
    <div>
      <h4 className="forecastWeather-day">{getDateDay()}</h4>
      <WeatherIcon code={props.forecast.condition.icon} size={36} />
      <div className="WeatherForecast-temperature-max">
        <span className="col WeatherForecast-temperature-max">
          {maxTemp()}°
        </span>
        <span> </span>
        <span className="col WeatherForecast-temperature-min">
          {minTemp()}°
        </span>
      </div>
    </div>
  );
}
