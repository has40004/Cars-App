import React from 'react';
const Counter2 =  props => {
    return (
        <div style ={{
            border: '1px solid #ccc',
            width: "200px",
            margin: '0 auto'
        }}>
            <h3>Counter 2 </h3>
            {props.click? <p> clicked </p> : null} 
        </div>
    )
}
export default Counter2; 