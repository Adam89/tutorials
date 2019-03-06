import React, { useState, useEffect } from 'react'; // use state is a func takes inital state returns array with two ele cur state second ele is function to manipulate state
import axios from 'axios';

const todo = props => {

  const [todoName, setTodoName] = useState(''); 
  const [toDoList, setTodoList] = useState([]);
  // const [toDoState, setTodoState] = useState({
  //   userInput: '',
  //   todoList: []
  // });
  useEffect(() => { // func executed on load for the first time hooks into reacts internals and makes sure code executes after render cycle for high performance and ui is updated correctly
    axios
    .get('https://hooks-1542a.firebaseio.com/todos.json')
    .then((result) => {
      console.log(result, 'result');
      const todoData = result.data;
      const todos = [];
      for (const key in todoData) {
        todos.push({id:key, name:todoData[key].name})
      }
      setTodoList(todos);
    });
  }, [])
  const inputChangeHandler = (event) => {
      setTodoName(event.target.value)
    //   setTodoState({
    //     userInput: event.target.value,
    //     todoList: toDoState.todoList
    // })
  };

  const toDoAddHandler = () => {
    setTodoList(toDoList.concat(todoName));
    // setTodoState({
    //   userInput: toDoState.userInput,
    //   todoList: toDoState.todoList.concat(toDoState.userInput)
    // })
    axios
    .post('https://hooks-1542a.firebaseio.com/todos.json', {name: todoName})
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  return (
    <React.Fragment>
      <input  
        type="text" 
        placeholder="Todo" 
        onChange={inputChangeHandler}
        value={todoName}
        // value={toDoState.userInput}
        />
      <button 
        type="button"
        onClick={toDoAddHandler}>ADD</button>
      <ul>
       {/*
          {toDoState.todoList.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
        }
        
        {toDoList.map(todo => (
          <li key={todo}>{todo}</li>
        ))*/}
        {toDoList.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </React.Fragment>
  )
};

export default todo;

// must use state on top level component function. A function which takes props and renders jsx. Must be called in top level of function body no if statement NO NESTING only root level