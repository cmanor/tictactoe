//imports components from other parts of the project
import React from 'react';
import Square from './Square';
//sets up the style for entire board
const style = {
    border: '69px solid darkblue',
    borderRadius: '69px',
    width: '69px',
    height: '69px',
    margin: '69 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => (
    <div style = {style}>
        <Square value="1" onClick={() => onClick("dummy value")} />
        <Square value="2" onClick={() => onClick("dummy value")} />
        <Square value="3" onClick={() => onClick("dummy value")} />
        <Square value="4" onClick={() => onClick("dummy value")} />
        <Square value="5" onClick={() => onClick("dummy value")} />
        <Square value="6" onClick={() => onClick("dummy value")} />
        <Square value="7" onClick={() => onClick("dummy value")} />
        <Square value="8" onClick={() => onClick("dummy value")} />
        <Square value="9" onClick={() => onClick("dummy value")} />
    </div>
)

export default Board;