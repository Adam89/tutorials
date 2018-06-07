import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component { //use layout component as wrapper around core content component we want rendered on screen
	state = {
		showSideDrawer: false
	}

	sideDrawClosedHandler = () => {
		this.setState({ showSideDrawer: false})
	}

	sideDrawToggleHandler = () => { // use function form setting state when it depends on old state
		this.setState((prevState) => {
			return { showSideDrawer: !this.state.showSideDrawer }; // show side draw to the opposite of current state}
		});
	}

	render () {
		return (
			<Aux>
				<Toolbar
					drawToggleClicked={this.sideDrawToggleHandler} />  {/* holds three components Toolbar,SideDrawer, BackDrop */}
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


// Layout is a HOC as it's the wrapper for other components

