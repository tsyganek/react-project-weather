import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cloud from "./clouddrizzle.svg";
import "./index.css";

export default function WeatherForecast() {
  return (
    <div className="forecastContainer">
      <div className="row">
        <div className="col">
          <h4>Day</h4>
          <img className="forecastImg" src={cloud} />
          <div className="row">
            <div className="col-5 maxtemp">10°</div>
            <div className="col-5 mintemp">20°</div>
          </div>
        </div>

        <div className="col">
          <h4>Day</h4>
          <img className="forecastImg" src={cloud} />
          <div className="row">
            <div className="col-5 maxtemp">10°</div>
            <div className="col-5 mintemp">20°</div>
          </div>
        </div>

        <div className="col">
          <h4>Day</h4>
          <img className="forecastImg" src={cloud} />
          <div className="row">
            <div className="col-5 maxtemp">10°</div>
            <div className="col-5 mintemp">20°</div>
          </div>
        </div>

        <div className="col">
          <h4>Day</h4>
          <img className="forecastImg" src={cloud} />
          <div className="row">
            <div className="col-5 maxtemp">10°</div>
            <div className="col-5 mintemp">20°</div>
          </div>
        </div>

        <div className="col">
          <h4>Day</h4>
          <img className="forecastImg" src={cloud} />
          <div className="row">
            <div className="col-5 maxtemp">10°</div>
            <div className="col-5 mintemp">20°</div>
          </div>
        </div>

        <div className="col">
          <h4>Day</h4>
          <img className="forecastImg" src={cloud} />
          <div className="row">
            <div className="col-5 maxtemp">10°</div>
            <div className="col-5 mintemp">20°</div>
          </div>
        </div>

        <div className="col">
          <h4>Day</h4>
          <img className="forecastImg" src={cloud} />
          <div className="row">
            <div className="col-5 maxtemp">10°</div>
            <div className="col-5 mintemp">20°</div>
          </div>
        </div>

        <div className="col">
          <h4>Day</h4>
          <img className="forecastImg" src={cloud} />
          <div className="row">
            <div className="col-5 maxtemp">10°</div>
            <div className="col-5 mintemp">20°</div>
          </div>
        </div>

        <div className="col">
          <h4>Day</h4>
          <img className="forecastImg" src={cloud} />
          <div className="row">
            <div className="col-5 maxtemp">10°</div>
            <div className="col-5 mintemp">20°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
