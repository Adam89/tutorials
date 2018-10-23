import * as actionTypes from "../actions";

const initialState = {
  persons: []
};

const { ADD_PERSON, DELETE_PERSON } = actionTypes;

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.payload.name,
        age: action.payload.age
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case DELETE_PERSON:
      return {...state,
        persons: state.persons.filter(person => person.id !== action.payload.personId)};
  }
  return state;
};

export default personReducer;
