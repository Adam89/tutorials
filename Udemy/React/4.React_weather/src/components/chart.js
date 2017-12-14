// no compoment state props come in from parent weather list we render a component
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines'


export default (props) => {
    return (
        <div>
             <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        </div>
    )
}

// pass in temps humidity as props