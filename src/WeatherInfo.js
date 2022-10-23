import React from "react";
import FriendlyDate from "./FriendlyDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row cityBlock">
        <div>
          <h1>{props.data.city}</h1>
        </div>
        <ul className="weatherData">
          <li>
            <b>
              <FriendlyDate date={props.data.date} />
            </b>
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-2 float-right">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-1 temperature">
          <h2>{props.data.temperature}</h2>
        </div>
        <div className="col-2 degrees">
          <a href="#">°C</a> | <a href="#">°F</a>
        </div>
        <div className="col-4">
          <ul className="weatherDataIndex">
            <li>Feels like: {props.data.feelsLike}°</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
