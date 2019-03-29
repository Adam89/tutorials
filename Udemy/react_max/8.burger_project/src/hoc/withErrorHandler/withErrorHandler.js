import React, {useState, useEffect} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => { // errorHandler creates this class
  return props => {

    const [error, setError] = useState(null)

      const reqInterceptor = axios.interceptors.request.use(req => {
        setError(null)
        return req;
      })
     const resInterceptor = axios.interceptors.response.use(response => response, err => {
         setError(err);
        });

    
    useEffect(() => { 
      return () => { // clean up component will unmount
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      }
    }, [reqInterceptor, resInterceptor]) // watching 

      const errorConfirmedHandler = () => {
        setError(null)
      }
      return (
        <Aux>
          <Modal 
          show={error}
          modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
          </Modal>
          <WrappedComponent {...props} />
        </Aux>
      );
  }
}

export default withErrorHandler;

// function takes wrapped component as parameter returns function which recieve props and returns jsx with wrapped component
// show comes from wrapped component