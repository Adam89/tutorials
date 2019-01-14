import * as actionTypes from './actionsTypes';
import axios from "../../axios-orders";

const { ADD_INGREDIENT, 
        REMOVE_INGREDIENT, 
        SET_INGREDIENTS,
        FETCH_INGREDIENTS_FAILED } = actionTypes;

export const addIngredient = (ingName) => {
  return {
    type: ADD_INGREDIENT,
    ingredientName: ingName
  };
};


export const removeIngredient = (ingName) => {
  return {
    type: REMOVE_INGREDIENT,
    ingredientName: ingName
  }
};

export const initIngredients = () => { // return a func where you recieve the dispatch func to use in func body
  return dispatch => { // use async code and dispatch another action to set ing
    axios.get('https://my-burget-52cc0.firebaseio.com/ingredients.json')
    .then(response => {
        dispatch(setIngredients(response.data));
    }).catch(error =>{
        dispatch(fetchIngredientsFailed());
    });
  };
};

export const setIngredients = (ingredients) => { // SYNC
  return {
    type: SET_INGREDIENTS,
    ingredients: ingredients
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: FETCH_INGREDIENTS_FAILED
  }
}