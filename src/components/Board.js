//imports components from other parts of the project
import React from 'react';
import Square from './Square';
//sets up the style for entire board
const style = {
    border: '6px solid darkblue',
    borderRadius: '6px',
    width: '300px',
    height: '300px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => (
    <div style = {style}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))};
    </div>
)

export default Board;