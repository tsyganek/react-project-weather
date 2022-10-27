import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForecastDay from "./WeatherForecastDay.js";
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
          {forecast.map(function (dailyForecast, index) {
            if (index <= 4) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay forecast={forecast[1]} />
                </div>
              );
            }
          })}
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

    return <p>Loading forecast...</p>;
  }
}
