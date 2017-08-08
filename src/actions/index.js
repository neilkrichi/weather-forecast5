import axios from "axios";

const API_KEY = "333fecf1fa1406f81e18cb7c82f450ff";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
