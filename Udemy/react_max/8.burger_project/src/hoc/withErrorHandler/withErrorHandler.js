import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => { // errorHandler creates this class
  return class extends Component {
    state = {
      error: null
    }
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      })
      axios.interceptors.response.use(response => response, error => {
       this.setState({error:error})
      });
    }
      errorConfirmedHandler = () => {
        this.setState({error: null});
      }
    error 
    render () {
      return (
        <Aux>
          <Modal 
          show={this.state.error}
          modalClosed={this.errorConfirmedHandler}>
          {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}
  
  
  
  
export default withErrorHandler;

// function takes wrapped component as parameter returns function which recieve props and returns jsx with wrapped component
// show comes from wrapped component