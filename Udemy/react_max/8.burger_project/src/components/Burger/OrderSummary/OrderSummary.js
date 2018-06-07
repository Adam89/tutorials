import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchasedCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchasedContinued}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary