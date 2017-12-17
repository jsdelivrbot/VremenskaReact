import React from "react";
import DailyForecast from "./dailyForecast";

const Forecast = ({ forecasts }) => {
  const renderedForecasts = forecasts.map(forecast => {
    return <DailyForecast forecast={ forecast } key={ forecast.date } />;
  });

  return <div className="row">{renderedForecasts}</div>;
};

export default Forecast;
