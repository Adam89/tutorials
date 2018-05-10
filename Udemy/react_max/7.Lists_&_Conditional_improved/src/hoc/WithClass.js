import React from 'react';

const withClass = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
);


export default withClass;

// wraps content in a div and outpus css