import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    ingredients: {
			salad: 0,
			meat: 0,
			bacon: 0,
			cheese: 0
		},
    totalPrice: 4,
};

const ingredientPrices = {
  salad: 5,
  bacon: 4,
  cheese: 1.3,
  meat: 0.7
};

const { ADD_INGREDIENT, REMOVE_INGREDIENT } = actionTypes;

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
				...state, 
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + ingredientPrices[action.ingredientName] //get value of individual item
			};
    case REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.payload.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - ingredientPrices[action.ingredientName]
			};
		default:
			return state
	}
}

export default ingredientReducer;