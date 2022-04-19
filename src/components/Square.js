import React from 'react';

const style = {
    background: 'pink',
    border: '6px solid darkblue',
    fontWeight: '690',
    fontFamily: 'Comic Sans MS',
    cursor: 'pointer',
    outline: 'none'
};


const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);
 
export default Square;