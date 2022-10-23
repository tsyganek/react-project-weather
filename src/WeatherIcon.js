import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-day": "CLOUDY",
    "few-clouds-night": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "shower-rain-day": "RAIN",
    "shower-rain-day": "RAIN",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={60}
      animate={true}
    />
  );
}
