import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid red',
        textAlign: 'center'
    };
    return <input 
            type="text" 
            style={style}
            onInput={props.changed} 
            value={props.currentName}/>;
}

export default userInput;