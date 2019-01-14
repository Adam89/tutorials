import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const ingredientPrices = {
  salad: 5,
  bacon: 4,
  cheese: 1.3,
  meat: 0.7
};

const { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED } = actionTypes;

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
    case SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        error: false
      };
    case FETCH_INGREDIENTS_FAILED:
    return {
      ...state,
      error: true
    };
		default:
			return state
	}
}

export default ingredientReducer;