import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component { //use layout componet as wrapper around core content component we want rendered on screen
	state = {
		showSideDrawer: true
	}

	sideDrawClosedHandler = () => {
		this.setState({ showSideDrawer: false})
	}

	render () {
		return (
			<Aux>
				<Toolbar />  {/* holds three components Toolbar,SideDrawer, BackDrop */}
				<SideDrawer 
				open={this.state.showSideDrawer} 
				closed={this.sideDrawClosedHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main> {/* output component we wrap with this layout */}
			</Aux>
		);
	}
}


export default Layout;

