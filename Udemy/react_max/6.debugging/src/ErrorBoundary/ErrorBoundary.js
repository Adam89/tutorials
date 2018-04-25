import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ' '
    }

    componentDidCatch = (error, info) => { // method receives error and info passed by react executed when component wrapped in error boundary throws an error

        this.setState({hasError:true, errorMessage:error})
    }
    render() {
        if(this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children // whatever we wrap in error boundary
        }
    }
}


export default ErrorBoundary;


// this is a higher order component with the goal of becoming the parent of components to catch errors key