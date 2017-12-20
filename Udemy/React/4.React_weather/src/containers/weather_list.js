import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'; // pass data to child
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) { // each ele in array call render weather
        console.log(cityData);
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        console.log(pressures);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        console.log(humidities);
        const {lon, lat} = cityData.city.coord; // ES6 Dest
        // const lat = cityData.city.coord.lat;
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                   <Chart data={temps} color="orange" units="k"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hpa" />
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City List</th>
                        <th>Temp (K)</th>
                        <th>Pressure (HPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)} 
                </tbody>
            </table>
            );
        }
    }


    // need to get data into our tbody connect function define function map state to props pull weather data into our container 

    //array key always goes on the top level element and needs to be unique

    function mapStateToProps({weather}) { // defines variable weather
        return { weather }; // return object we use weather key because we defined as our reducer so we can use state.weather key and val is identical {weather} === {weather:weather}
    }

    // connect our function with map state to props to container

    export default connect(mapStateToProps)(WeatherList);