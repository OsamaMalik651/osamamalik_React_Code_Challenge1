import React, { useState } from 'react'
import styles from "./Board.module.css"
import {
    boardArray, chanagePlayer, checkResults, players
} from "../../helpers";


const Board = () => {
    const [board, setBoard] = useState(boardArray);
    const [turnCount, setTurnCount] = useState(0);
    const [result, setResult] = useState("");
    const [currentPlayer, setCurrentPlayer] = useState(players[0]);

    //Check for result when atleast 5 or more turns have been played in the game.
    React.useEffect(() => {
        if (board.filter((value) => value.value !== "").length >= 5) {
            setResult(checkResults(board, turnCount));
        }
    }, [board, turnCount]);

    const handleClick = (index) => {
        //Check if user clicked in empty postion on the board
        if (board[index].canUpdate) {
            //If the clicked postion is empty, update board array
            setBoard((currentBoardArray) =>
                currentBoardArray.map((position, positionIndex) => {
                    if (positionIndex === index) {
                        return {
                            ...position,
                            canUpdate: false,           //set the position to be non-updatable by other player
                            value: currentPlayer.shape // set the shape to be teh currentPlayers shape.
                        };
                    }
                    return position;
                })
            );
            setCurrentPlayer(chanagePlayer(currentPlayer)); //Change current player for next turn
            setTurnCount(turnCount + 1);                    //Increment totat turn count
        }
    };

    //Clear all state variables and initialize board
    const handleReset = () => {
        setBoard(boardArray);
        setResult("");
        setTurnCount(0);
        setCurrentPlayer(players[0]);
    }
    return (
        <div className={styles.Board}>
            <h1>Tic Tac Toe</h1>
            {result === "" ? <p>Current Turn: {currentPlayer.name} - {currentPlayer.shape}</p> : <p>Reset the game to play again.</p>}
            <div className={styles.BoardGame}>
                {board.map((position, index) => (
                    <div
                        className={`${styles.position} ${position.canUpdate ? styles.Edit : styles.Disabled
                            }`}
                        key={index}
                        onClick={() => handleClick(index)}
                    >
                        {position.value}
                    </div>
                ))}
            </div>
            {/* Check if the match is drawn or a player won and display message accordingly*/}
            {turnCount === 9 && result === "Match Drawn" ? (
                <p>{result}</p>
            ) : (
                <p>The Winner is : {result}</p>
            )}

            <button className={`${styles.Button} ${turnCount < 9 && result === "" ? styles.Disabled : ""}`} onClick={handleReset}>
                Reset Game
            </button>
        </div>
    )
}

export default Board