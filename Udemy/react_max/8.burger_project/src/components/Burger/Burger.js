import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from './Burgeringredients/Burgeringredients';

const burger = (props) => {

	let transformedIngredients = Object.keys(props.ingredients).map(igKey => { // extract object keys and turns into an array then map over keys and get length of each key
		return [...Array(props.ingredients[igKey])].map((_, index) => {
			return <BurgerIngredient key={igKey + index} type={igKey} />
		});
	})
		.reduce((arr, el) => {// allows us to transform array into something else takes function and recueves to args prev val and curr val. Takes empty array as default args
		return arr.concat(el);
	}, []); 
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients</p>
	}
	console.log(transformedIngredients)
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;