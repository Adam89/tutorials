import React, { Component } from 'react';
import { connect } from 'react-redux'; //HOC used on export
import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


const { INCREMENT, ADD, DECREMENT, SUBTRACT, STORE_RESULT, ON_DELETE_RESULT} = actionTypes;
class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                {this.props.storedResults.map(strResult => (
                  <li 
                  key={strResult.id} 
                  onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}
                </li>))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps =  state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  }
}  // state managed to redux is mapped to the props expect redux state as input and returns JS object map prop names and slices of state stored in redux

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: INCREMENT}), // dispatch action call using this.props
    onDecrementCounter: () => dispatch({type: DECREMENT}),
    onAddCounter: () => dispatch({type: ADD, payload: { val : 10}}),
    onSubtractCounter: () => dispatch({type: SUBTRACT, payload: { val : 15}}),
    onStoreResult: (result) => dispatch({type: STORE_RESULT, payload: {result: result}}),
    onDeleteResult: (id) => dispatch({type: ON_DELETE_RESULT, payload: { resultEleId: id }})
  };
} // which actions do i want to dispatch in this container stores a func which recieves the dispacth func as an arg return JS Obj which has prop names hold ref to func which gets executed

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect is a function that returns a HOC and takes a component as input take slice of state and action to dispatch pass null if you only need to dispatch