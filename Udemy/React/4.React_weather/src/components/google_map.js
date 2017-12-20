import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        return <div ref="map" />
    }
}

export default GoogleMap;

// ref allows us to get a direct reference to a html element rendered to the page. after component this gives us acess to this.refs.map in this component

//componentDidMount lifecycle method called after component rendered to the screen

// use refs to do 3rd party librarys to intergrate with react apps