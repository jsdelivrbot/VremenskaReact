import React from "react";
import WeatherIcons from "react-weathericons";
import css from "weathericons/css/weather-icons.min.css";

const dani = {
  Mon: "Ponedjeljak",
  Tue: "Utorak",
  Wed: "Srijeda",
  Thu: "Četvrtak",
  Fri: "Petak",
  Sat: "Subota",
  Sun: "Nedjelja"
};

const mjeseci = {
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

const obradiDatum = string => {
  const datumRegex = /(\d+) (\w{3}) (\d{4})/g;
  const rez = datumRegex.exec(string);
  const dan = rez[1];
  const mj = mjeseci[rez[2]];
  const god = rez[3];

  return `${dan}. ${mj} ${god}.`;
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
      <h3>{dani[forecast.day]}</h3>
      <h4>{obradiDatum(forecast.date)}</h4>
      <strong>Maksimalna dnevna: </strong> {forecast.high}°C <br />
      <strong>Minimalna dnevna: </strong> {forecast.low}°C <br />
    </div>
  );
};

export default DailyForecast;
