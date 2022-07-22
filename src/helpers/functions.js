import { players, winningPatterns } from "./index";

//function to check the results of the game.
//take board and turnCount state variables as input
//retutns a string containing the output.
export const checkResults = (board, turnCount) => {
    let winner = "";
    let isWinner = false;

    //Loop through each winning pattern
    winningPatterns.forEach((pattern) => {
        //generate an array of board values according to the pattern indices.
        const array = pattern.map((index) => board[index].value);
        //check if all the values in array corresponds to a single player.
        if (
            array.every((item) => item === players[0].shape) ||
            array.every((item) => item === players[1].shape)
        ) {
            //Get player name from players array
            winner = players.filter((player) => player.shape === array[0])[0].name;
            isWinner = true;
        }
    });

    //Check if the match is drawn and return result.
    if (turnCount === 9 && winner === "" && isWinner === false) {
        return "Match Drawn";
    } else if (isWinner) {
        return winner;
    }
};

//function to change player for the next turn
export const chanagePlayer = (currentPlayer) => {
    if (currentPlayer.shape === "X") return players[1];
    if (currentPlayer.shape === "O") return players[0];
};
