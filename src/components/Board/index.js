import React, { useState } from 'react'
import styles from "./Board.module.css"
import {
    boardArray, players
} from "../../helpers";


const Board = () => {
    const [board, setBoard] = useState(boardArray);
    const [turnCount, setTurnCount] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(players[0]);

    const handleClick = (index) => {
        //Check if user clicked in empty postion on the board
        if (board[index].canUpdate) {
            //If the clicked postion is empty, update board array
            setBoard((currentBoardArray) =>
                currentBoardArray.map((position, positionIndex) => {
                    if (positionIndex === index) {
                        return {
                            ...position,
                            canUpdate: false, //set the position to be non-updatable by other player
                            value: currentPlayer.shape // set the shape to be teh currentPlayers shape.
                        };
                    }
                    return position;
                })
            );
            setTurnCount(turnCount + 1); //Increment totat turn count

        }
    };
    const handleReset = () => {
        setBoard(boardArray);
        setCurrentPlayer(players[0]);
    }
    return (
        <div className={styles.Board}>
            <h1>Tic Tac Toe</h1>
            <p>Current Turn: {currentPlayer.name}</p>
            <div className={styles.BoardGame}>
                {board.map((position, index) => (
                    <div
                        className={`${styles.position} ${position.canUpdate ? styles.edit : styles.Disabled
                            }`}
                        key={index}
                        onClick={(e) => handleClick(index)}

                    >
                        {position.value}
                    </div>
                ))}
            </div>
            <p>The Winner is : Player</p>
            <button className={styles.Button} onClick={handleReset}>
                Reset Game
            </button>
        </div>
    )
}

export default Board