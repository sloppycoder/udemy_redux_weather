import axios from 'axios';

const API_KEY = 'af138576caaf34033beaff441d1f641b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  return {
    type: FETCH_WEATHER,
    payload: axios.get(url)
  };
}
