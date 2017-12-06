import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';
export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term:'' };

        this.onInputChange = this.onInputChange.bind(this); // this (searchbar) has function called on input change bind that function to this and replace on input change with the new bound instance of the function.
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
       this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault(); // dont submit form

        //connect searchbar to redux
        // need to fetch weather data

        this.props.fetchWeather(this.state.term) // make weather request
        this.setState({term: ''})// clear input after search term
    }
    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Get a five day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                    <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

// hook action creator fetch weather to searchbar container define function 

function mapsDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather}, dispatch) // bind action to dispatch and flow through app
}


// Controlled field is a form element where the value of the input is set by the state of the component

// input value is coming from this.state.term when ever someone changes run function this.onInputChange

export default connect(null, mapsDispatchToProps)(SearchBar); // pass null because the first arg is always state but no state is being cared about from this container. we now get acess to this.props.fetchweather