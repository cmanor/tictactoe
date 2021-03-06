import React, { useState } from 'react';
import calculateWinner from '../helpers';
import Board from './Board';

const style = {
    width: '200px',
    margin: '20px auto',
}

const Game =() => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const timeInHistory = history.slice(0,stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        //we we use a copy of the board so we don't mutate the original state
        // If user clicks occupied square or if game is won, do nothing
        if (winner || squares[i]) return;
        //put an X or O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = step => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0)
    };

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : 'New Game';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    );

    return (
        //you can wrap elements in fragments if you don't want to render the element
        <>
        <Board squares = {history[stepNumber]} onClick={handleClick} />
        <div style={style}>
            <p>{winner ? 'Winner: ' + winner : (xIsNext ? 'X' : 'O') + "'s turn"}</p>
            {renderMoves()}
        </div>
        </>
    )

};

export default Game;