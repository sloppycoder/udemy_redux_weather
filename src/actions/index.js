import axios from 'axios';

const API_KEY = 'af138576caaf34033beaff441d1f641b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WATHER = 'FETCH_WATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  console.log(url);

  return {
    type: FETCH_WATHER,
    payload: axios.get(url)
  };
}
