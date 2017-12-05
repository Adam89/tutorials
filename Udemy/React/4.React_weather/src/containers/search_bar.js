import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term:'' };

        this.onInputChange = this.onInputChange.bind(this); // this (searchbar) has function called on input change bind that function to this and replace on input change with the new bound instance of the function.
    }
    onInputChange(event) {
       this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault(); // dont submit form

        // need to fetch weather data
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




// Controlled field is a form element where the value of the input is set by the state of the component

// input value is coming from this.state.term when ever someone changes run function this.onInputChange