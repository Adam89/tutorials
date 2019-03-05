import React, { useState } from 'react'; // use state is a func takes inital state returns array with two ele cur state second ele is function to manipulate state

const todo = props => {

  const [todoName, setTodoName] = useState(''); 
  const [toDoList, setTodoList] = useState([]);
  // const [toDoState, setTodoState] = useState({
  //   userInput: '',
  //   todoList: []
  // });

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
         */}
        {toDoList.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </React.Fragment>
  )
};

export default todo;

// must use state on top level component function. A function which takes props and renders jsx. Must be called in top level of function body no if statement NO NESTING only root level