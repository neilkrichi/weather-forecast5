import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google-map";
import '../style/style.css'

class WeatherList extends Component {

  renderWeather(cityData, i) {
    const name = cityData.city.name
    const countrycode = cityData.city.country;
    const temps = cityData.list.map(weather => weather.main.temp);
    const tempsCelsius = temps.map(value => value - 273.15)
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const lat = cityData.city.coord.lat
    const lon = cityData.city.coord.lon




    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} className='map' /></td>
        <td><Chart data={tempsCelsius} color="orange" units="Celsius" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map((item, i) => {
              return this.renderWeather(item, i)
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
