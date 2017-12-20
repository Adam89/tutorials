// no compoment state props come in from parent weather list we render a component
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'


function average(data) {
    return _.round(_.sum(data)/data.length) // pass array of data round it up and number / length to get average passed to component below.
}

export default (props) => {
    return (
        <div>
             <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}

// pass in temps humidity as props