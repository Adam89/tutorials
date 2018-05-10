import React, {Component} from 'react';

// const withClassTwo = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const withClassTwo = (WrappedComponent, className) => {
    return class extends Component {
        render () {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}
    
export default withClassTwo;
// returns a function which recieves props and then render a div with. Doesn't qualify as a comonent the return function is the functional component. 

//Props just object of key value pairs  so ...props passes on the props