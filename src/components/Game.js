import React, { useState } from 'react';
import calculateWinner from '../helpers';
import Board from './Board';


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
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };

    const jumpTo = () => {

    };

    const renderMoves = {

    };

    return (
        <Board squares = {board} onClick={handleClick} />
    )

};

export default Game;