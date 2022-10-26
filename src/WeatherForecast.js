import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecastWeather-container">
        <div className="row">
          <div className="col">
            <h4 className="forecastWeather-day">Day</h4>
            <WeatherIcon code={forecast[1].condition.icon} size={36} />
            <div className="WeatherForecast-temperature-max">
              <span className="col WeatherForecast-temperature-max">
                {Math.round(forecast[1].temperature.maximum)}
              </span>
              <span> </span>{" "}
              <span className="col WeatherForecast-temperature-min">
                {Math.round(forecast[1].temperature.minimum)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    console.log(props);
    let apiKey = "50df61ta7co68388b9f4195d29abb711";
    let lat = props.latitude;
    let lon = props.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
