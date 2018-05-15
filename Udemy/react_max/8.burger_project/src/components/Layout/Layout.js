import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => ( //use layout componet as wrapper around core content component we want rendered on screen
	<Aux>
		<div>
			Toolbar,SideDrawer, BackDrop
		</div>  {/* holds three components Toolbar,SideDrawer, BackDrop */}
		<main>
			{props.children}
		</main> {/* output component we wrap with this layout */}
	</Aux>
);


export default layout;

