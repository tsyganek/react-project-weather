import React from "react";
import img from "./brightness-high.svg";

export default function Text() {
  return (
    <div>
      <div className="container">
        <div className="formContainer">
          <form className="form">
            <div className="row">
              <div className="col-6">
                <input
                  className="searchField form-control"
                  type="text"
                  value="type your city"
                  autoFocus="on"
                ></input>
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
            <h1>Kyiv</h1>
          </div>
          <ul className="weatherData">
            <li>Tuesday, 14.00</li>
            <li>Partly Cloudy</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-2">
            <img src={img} alt="sunny" />
          </div>
          <div className="col-1 temperature">
            <h2>22</h2>
          </div>
          <div className="col-2 degrees">
            <a href="#">°C</a> | <a href="#">°F</a>
          </div>
          <div className="col-4">
            <ul className="weatherDataIndex">
              <li>Precipitation: 0</li>
              <li>Humidity: 34%</li>
              <li>Wind: 19 km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        The project is made by{" "}
        <a href="https://www.linkedin.com/in/kateryna-tsygankova-15a429244/">
          Kateryna Tsygankova
        </a>
        , open-sourced on{" "}
        <a href="https://github.com/tsyganek/react-project-weather">GitHub</a>{" "}
        and hosted on Netlify
      </footer>
    </div>
  );
}
