import React, { useEffect, useReducer, useMemo } from 'react'; // use state is a func takes inital state returns array with two ele cur state second ele is function to manipulate state
import axios from 'axios';
import List from './List';
import {useFormInput} from "../hooks/Form";

const todo = props => {

  const toDoInput = useFormInput()
  

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.payload)
      case 'SET':
        return action.payload
      case 'REMOVE':
        return state.filter((todo) => todo.id !== action.payload)
      default:
        break;
    }
  }

  const [toDoList, dispatch] = useReducer(todoListReducer, [])


  // func executed on load for the first time hooks into reacts internals and makes sure code executes after render cycle for high performance and to ensure ui is updated correctly
  useEffect(() => { // pass new func every render allows you to read scoped state variables without getting stale
    axios
      .get('https://hooks-1542a.firebaseio.com/todos.json')
      .then((result) => {
        const todoData = result.data;
        const todos = [];
        for (const key in todoData) {
          todos.push({ id: key, name: todoData[key].name })
        }
        dispatch({type:'SET', payload: todos});
      });
      return () => { //componentWillUnmount cleanup happens after every re render componentDidUpdate cleans up previous effects before applying next effect
      //execute this as clean up on every render cycle before executing use effect
      console.log('cleanup');
    }
  }, []) //empty array run an effect and clean it up only once (on mount and unmount) or  skip applying the effect if certain data doesn't change. 

  const todoName = toDoInput.value

  const toDoAddHandler = () => {
    axios
      .post('https://hooks-1542a.firebaseio.com/todos.json', { name: todoName })
      .then((response) => {
        const toDoItem = { id: response.data.name, name: todoName };
        dispatch({type: 'ADD', payload:toDoItem});
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const toDoRemoveHandler = toDoId => {
    axios.delete(`https://hooks-1542a.firebaseio.com/todos/${toDoId}.json`)
    .then(res => {
      dispatch({type: 'REMOVE', payload: toDoId})
    })
    .catch(err => {
      console.log(err, 'err')
    })
  }

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={toDoInput.onChange}
        value={toDoInput.value}
        style={{backgroundColor: toDoInput.validity ? 'transparent' : 'red'}}
      />
      <button
        type="button"
        onClick={toDoAddHandler}>ADD
      </button>
      {useMemo(() => <List items={toDoList} onClick={toDoRemoveHandler} />, [toDoList])}
    </React.Fragment>
  )
};


export default todo;

// must use state on top level component function. A function which takes props and renders jsx. Must be called in top level of function body no if statement NO NESTING only root level