import React from 'react'
import styles from "./Board.module.css"
const Board = () => {
    const boardArray = [...Array(9).fill({ canUpdate: true, value: "" })];
    const handleReset = () => {
        console.log("Reset the game")
    }
    return (
        <div className={styles.Board}>
            <h1>Tic Tac Toe</h1>
            <p>Current Turn: Player 1</p>
            <div className={styles.BoardGame}>
                {boardArray.map((position, index) => (
                    <div
                        className={`${styles.position} ${position.canUpdate ? styles.edit : styles.Disabled
                            }`}
                        key={index}

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