import React from 'react';

const style = {
    background: 'pink',
    border: '69px solid darkblue',
    fontWeight: '69',
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