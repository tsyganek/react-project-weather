import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFarenheit(event) {
    // event.preventDefault();
    setUnit("farenheit");
  }

  function showCelcius(event) {
    // event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="row">
        <div className="col-7 float-right  temperature">
          <h2>{props.celcius}</h2>
        </div>
        <div className="col-5 float-left degrees">
          °C |
          <a className="degreeLink" href="#" onClick={showFarenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let farenheit = Math.round(props.celcius * 1.8 + 32);
    return (
      <div className="row">
        <div className="col-7 float-right  temperature">
          <h2>{farenheit}</h2>
        </div>
        <div className="col-5 float left degrees">
          <a className="degreeLink" href="#" onClick={showCelcius}>
            °C
          </a>
          | °F
        </div>
      </div>
    );
  }
}
