import React from 'react';
import Aux from '../../../hoc/Aux';


const orderSummary = (props) => {

  const ingriedientSummary = Object.keys(props.ingredients).map(igKey => {
    return <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
  });


  return ( 
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious burger with the following ingriedients:</p>
      <ul>
        {ingriedientSummary}
      </ul>
      <p>Continue to Checkout</p>
    </Aux>
  );
};

export default orderSummary