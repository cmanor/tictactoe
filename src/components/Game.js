import React, { useState } from 'react';
import calculateWinner from '../helpers';
import Board from './Board';

const style = {
    width: '200px',
    margin: '20px auto',
}

const Game =() => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        //we we use a copy of the board so we don't mutate the original state
        const boardCopy = [...board];
        // If user clicks occupied square or if game is won, do nothing
        if (winner || boardCopy[i]) return;
        //put an X or O in the clicked square
        boardCopy[i] = xIsNext ? 'Deez' : 'Nuts';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };

    const jumpTo = () => {

    };

    const renderMoves = () => 
         <button onClick={() => setBoard(Array(9).fill(null))}>
        New Game
        </button>
    ;

    return (
        //you can wrap elements in fragments if you don't want to render the element
        <>
        <Board squares = {board} onClick={handleClick} />
        <div style={style}>
            <p>{winner ? 'Winner: ' + winner : 'Next Player :' + (xIsNext ? 'X' : 'O')}</p>
            {renderMoves()}
        </div>
        </>
    )

};

export default Game;