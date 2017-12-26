import React from "react";
import WeatherIcons from "react-weathericons";
import css from "weathericons/css/weather-icons.min.css";

const days = {
  Mon: "Ponedjeljak",
  Tue: "Utorak",
  Wed: "Srijeda",
  Thu: "Četvrtak",
  Fri: "Petak",
  Sat: "Subota",
  Sun: "Nedjelja"
};

const months = {
  Jan: "Januar",
  Feb: "Februar",
  Mar: "Mart",
  Apr: "April",
  May: "Maj",
  Jun: "Jun",
  Jul: "Jul",
  Aug: "Avgust",
  Sep: "Septembar",
  Oct: "Oktobar",
  Nov: "Novembar",
  Dec: "Decembar"
};

const formatDate = string => {
  const dateRegex = /(\d+) (\w{3}) (\d{4})/g;
  const result = dateRegex.exec(string);
  const day = result[1];
  const month = months[result[2]];
  const year = result[3];

  return `${day}. ${month} ${year}.`;
};

const DailyForecast = ({ forecast }) => {
  return (
    <div className="col-lg-4">
      <div className="forecast-item">
        <WeatherIcons
          name={ "yahoo-" + forecast.code }
          size="4x"
        />
      </div>
      <h3>{days[forecast.day]}</h3>
      <h4>{formatDate(forecast.date)}</h4>
      <strong>Maksimalna dnevna: </strong> {forecast.high}°C <br />
      <strong>Minimalna dnevna: </strong> {forecast.low}°C <br />
    </div>
  );
};

export default DailyForecast;
