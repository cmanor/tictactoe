import React from 'react';

const style = {
    background: 'pink',
    border: '6px solid darkblue',
    fontWeight: '6',
    fontFmaily: 'Comic Sans MS',
    cursor: 'pointer',
    outline: 'none'
};


const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);
 
export default Square;