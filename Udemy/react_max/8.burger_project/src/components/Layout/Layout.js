import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
const layout = (props) => ( //use layout componet as wrapper around core content component we want rendered on screen
	<Aux>
		<Toolbar/>  {/* holds three components Toolbar,SideDrawer, BackDrop */}
		<main className={classes.Content}>
			{props.children}
		</main> {/* output component we wrap with this layout */}
	</Aux>
);


export default layout;

