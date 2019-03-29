import React, {useState} from 'react';
import {connect} from 'react-redux';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
const layout = (props) => { //use layout component as wrapper around core content component we want rendered on screen

  
  const [sideDrawVisible, setDraw] = useState(false)

	const sideDrawClosedHandler = () => {
		setDraw(false)
	}

	const sideDrawToggleHandler = () => { // use function form setting state when it depends on old state
		setDraw(!sideDrawVisible)
	}

		return (
			<Aux>
				<Toolbar
          drawToggleClicked={sideDrawToggleHandler} 
          isAuth={props.isAuthenticated}/>  {/* holds three components Toolbar,SideDrawer, BackDrop */}
				<SideDrawer 
          open={sideDrawVisible}
          closed={sideDrawClosedHandler}
          isAuth={props.isAuthenticated} />
				<main className={classes.Content}>
					{props.children}
				</main> {/* output component we wrap with this layout */}
			</Aux>
		);
	}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.authentication.token !== null
  }
}


export default connect(mapStateToProps)(layout);


// Layout is a HOC as it's the wrapper for other components

