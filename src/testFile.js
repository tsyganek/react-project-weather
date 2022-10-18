import React from "react";
import img from "./brightness-high.svg";

export default function Text() {
  return (
    <div className="container">
      <div className="formContainer">
        <form className="form">
          <div className="row">
            <div className="col-8">
              <input
                className="searchField form-control"
                type="text"
                value="type your city"
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
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-2">
              <img src={img} alt="sunny" />
            </div>
            <div className="col-2">
              <h2>22</h2>
            </div>
            <div className="col-2">
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
        <div className="col-4">
          <div className="row">
            <div>
              <h1>Kyiv</h1>
            </div>
            <ul className="weatherData">
              <li>Tuesday, 14.00</li>
              <li>Partly Cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
