import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'; // pass data to child

class WeatherList extends Component {

    renderWeather(cityData) { // each ele in array call render weather
        console.log(cityData);

        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                   <Chart data={temps} color="orange"/>
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
                        <th>Temp</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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