import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [

  { label: 'Salad', type: 'salad'},
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' }

]

const buildControls = (props) => (

  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingriedientsAdded(ctrl.type)} 
        remove={() => props.ingriedientsRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'Sign up to order'}</button>
  </div>
);

export default buildControls;