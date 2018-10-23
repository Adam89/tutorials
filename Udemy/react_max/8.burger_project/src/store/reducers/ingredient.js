import * as actionTypes from '../actions';

const initialState = {
    ingredients: {
			salad: 0,
			meat: 0,
			bacon: 0,
			cheese: 0
		},
    totalPrice: 4,
};

const { ADD_INGREDIENT, REMOVE_INGREDIENT } = actionTypes;

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
				...state, 
				ingredients: {
					...state.ingredients,
					[action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1
				}
			};
    case REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1
				}
			};
		default:
			return state
	}
}

export default ingredientReducer;