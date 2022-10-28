import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForecastDay from "./WeatherForecastDay.js";
import axios from "axios";
import "./WeatherForecast.css";
import { InfinitySpin } from "react-loader-spinner";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecastWeather-container">
        <div className="row">
          {forecast.map(function (forecast, index) {
            if (index > 0 && index <= 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay forecast={forecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "50df61ta7co68388b9f4195d29abb711";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="loading">
        <p>Loading forecast...</p>
        <InfinitySpin width="100" color="#808080" />
      </div>
    );
  }
}
