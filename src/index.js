import React, { Component } from "react";
import ReactDOM from "react-dom";
import Weather from "yahoo-weather";
import _ from "lodash";
import SearchBar from "./components/searchbar";
import CurrentWeather from "./components/currentWeather";
import Forecast from "./components/forecast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: null,
      searchStatus: "nosearch"
    };
    this.searchLocation("");
  }

  searchLocation(term) {
    if (term) {
      Weather(term, "c")
        .then(info => {
          this.setState({
            weatherInfo: info,
            searchStatus: "found"
          });
          console.log(this.state.weatherInfo);
        })
        .catch(err => {
          this.setState({
            weatherInfo: null,
            searchStatus: "error",
            error: err
          });
        });
    } else {
      this.setState({
        weatherInfo: null,
        searchStatus: "nosearch"
      });
    }
  }

  showSpinner() {
    switch (this.state.searchStatus) {
      case "nosearch":
        return "Unesite ime grada.";
      case "searching":
        return "Tražim...";
      case "error":
        return "Greška u pretrazi.";
      default:
        return "";
    }
  }

  render() {
    const dbcSearchLocation = _.debounce(term => this.searchLocation(term), 500)
    return (
      <div>
        <SearchBar onLocationChange={ dbcSearchLocation } />
        {this.state.searchStatus == "found" ? (
          <div>
            <h2>
              {this.state.weatherInfo.location.city +
                ", " +
                this.state.weatherInfo.location.country}
            </h2>
            <CurrentWeather condition={ this.state.weatherInfo.item.condition } />
            <Forecast forecasts={ this.state.weatherInfo.item.forecast } />
          </div>
        ) : (
          <div>{this.showSpinner()}</div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
