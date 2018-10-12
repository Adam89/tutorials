import React, { Component } from 'react';
import { connect } from 'react-redux'; //HOC used on export
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {


    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

const mapStateToProps =  state => {
  return {
    ctr: state.counter
  }
}  // state managed to redux is mapped to the props exspect redux state as input and returns JS object map prop names and slices of state stored in redux

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}) // dispatch action call using this.props
  };
} // which actions do i want to dispatch in this container stores a func which recieves the dispacth func as an arg return JS Obj which has prop names hold ref to func which gets executed

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect is a function that returns a HOC and takes a component as input take slice of state and action to dispatch pass null if you only need to dispatch