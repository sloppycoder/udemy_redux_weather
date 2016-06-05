import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GMap from '../components/google_map';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const temperatures = cityData.list.map(l => l.main.temp - 273);
    const pressures = cityData.list.map(l => l.main.pressure);
    const humidities = cityData.list.map(l => l.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={cityData.city.name}>
        <td><GMap lat={lat} lon={lon} /></td>
        <td><Chart data={temperatures} color="orange" units="C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(C) </th>
            <th>Pressure(hPa) </th>
            <th>Humidity(%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
