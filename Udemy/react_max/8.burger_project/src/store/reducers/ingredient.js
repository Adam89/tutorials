import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const ingredientPrices = {
  salad: 5,
  bacon: 4,
  cheese: 1.3,
  meat: 0.7
};

const { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED } = actionTypes;

const addIngredient = (state, action) => {
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + ingredientPrices[action.ingredientName], //get value of individual item
    building: true
  }
  return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
  const removeIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
  const removeIngredients = updateObject(state.ingredients, removeIngredient);
  const updatedStateRemove = {
    ingredients: removeIngredients,
    totalPrice: state.totalPrice + ingredientPrices[action.ingredientName], //get value of individual item
    building: true
  }
  return updateObject(state, updatedStateRemove);
}

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    error: false,
    totalPrice: 4,
    building: false
  });
}

const fetchIngFail = (state) => {
  return updateObject(state, { error: true });
}

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: return addIngredient(state, action);
    case REMOVE_INGREDIENT: return removeIngredient(state, action);
    case SET_INGREDIENTS: return setIngredients(state, action);
    case FETCH_INGREDIENTS_FAILED: return fetchIngFail(state, action);
    default: return state
  }
}

export default ingredientReducer;