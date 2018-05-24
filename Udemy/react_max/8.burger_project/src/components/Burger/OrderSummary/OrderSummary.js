import React from 'react';
import Aux from '../../../hoc/Aux';
const orderSummary = (props) => {
  const ingriedientSummary = props.ingridients;
  return ( 
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious burger with the following ingriedients:</p>
      <ul>

      </ul>
    </Aux>
  );
};

export default orderSummary