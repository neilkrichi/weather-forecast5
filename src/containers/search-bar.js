import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index.js";
import '../style/style.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      countrycode: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.city, this.state.countrycode);
    this.setState({ city: '', countrycode: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          name="city"
          value={this.state.city}
          onChange={this.onInputChange}
          id="locationTextField"
          />
        <select name='countrycode' value={this.state.countrycode} onChange={this.onInputChange}>
          <option countrycode="">Auto-detect</option>
          <option countrycode="us">United States</option>
          <option countrycode="ca">Canada</option>
          <option countrycode="fr">France</option>
        </select>

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function init() {
  var input = document.getElementById('locationTextField');
  var autocomplete = new window.google.maps.places.Autocomplete(input);
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
