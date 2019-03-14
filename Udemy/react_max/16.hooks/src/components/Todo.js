import React, { useEffect, useReducer, useRef } from 'react'; // use state is a func takes inital state returns array with two ele cur state second ele is function to manipulate state
import axios from 'axios';

const todo = props => {

  // const [todoName, setTodoName] = useState('');
  const todoInputRef = useRef('');
  console.log(todoInputRef, 'todoInputRef')
  // const [submittedTodo, setSubmittedTodo] = useState(null);
  
  // const [toDoList, setTodoList] = useState([]);

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
  useEffect(() => { // func executed on load for the first time hooks into reacts internals and makes sure code executes after render cycle for high performance and ui is updated correctly
    axios
      .get('https://hooks-1542a.firebaseio.com/todos.json')
      .then((result) => {
        console.log(result, 'result');
        const todoData = result.data;
        const todos = [];
        for (const key in todoData) {
          todos.push({ id: key, name: todoData[key].name })
        }
        dispatch({type:'SET', payload: todos});
      });
    return () => {
      //execute this as clean up on every render cycle before executing use effect
      console.log('cleanup');
    }
  }, [])

  // useEffect(() => {
  //   if (submittedTodo){
  //     dispatch({type: 'ADD', payload:submittedTodo});
  //   }
  // }, [submittedTodo]);


  // const inputChangeHandler = (event) => {
  //   setTodoName(event.target.value)
  // };

  const todoName = todoInputRef.current.value;
  console.log(todoName)




  const toDoAddHandler = () => {
    axios
      .post('https://hooks-1542a.firebaseio.com/todos.json', { name: todoName })
      .then((response) => {
        console.log(response);
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
        ref={todoInputRef}
      />
      <button
        type="button"
        onClick={toDoAddHandler}>ADD</button>
      <ul>
        {toDoList.map((todo) => (
          <li key={todo.id}
              onClick={toDoRemoveHandler.bind(this, todo.id)}>{todo.name}</li>
        ))}
      </ul>
    </React.Fragment>
  )
};


export default todo;

// must use state on top level component function. A function which takes props and renders jsx. Must be called in top level of function body no if statement NO NESTING only root level