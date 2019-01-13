import * as actionTypes from './actionsTypes';

const { ADD_INGREDIENT, REMOVE_INGREDIENT } = actionTypes;

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