import React, { Component } from 'react';
import SearchBar from '../containers/search-bar.js';
import WeatherList from "../containers/weather-list.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
