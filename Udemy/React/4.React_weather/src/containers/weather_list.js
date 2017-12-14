import React, { Component } from 'react';
import { connect } from 'react-redux'
class WeatherList extends Component {
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
                </tbody>
            </table>
            );
        }
    }


    // need to get data into our tbody connect function define function map state to props pull weather data into our container 


    function mapStateToProps({weather}) { // defines variable weather
        return { weather }; // return object we use weather key because we defined as our reducer so we can use state.weather key and val is identical {weather} === {weather:weather}
    }

    // connect our function with map state to props to container

    export default connect(mapStateToProps)(WeatherList);