import React from "react";

import WeatherIcons from "react-weathericons";
import css from "weathericons/css/weather-icons.min.css";

const CurrentWeather = ({ condition }) => {

  return (
    <div>
      <div className="media">
        <div className="media-left media-middle">
          <WeatherIcons
            className="media-object"
            name={ "yahoo-" + condition.code }
            size="4x"
          />
        </div>
        <div className="media-body">
          <h4 className="media-heading">Trenutno vrijeme: </h4>
          <strong>Temperatura: </strong> {condition.temp}°C <br />
          <strong>Izmjereno: </strong> {condition.date} <br />
        </div>
      </div>
    </div>
  );

};

export default CurrentWeather;
