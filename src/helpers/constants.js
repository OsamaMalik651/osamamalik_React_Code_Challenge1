//Create array of nine elements to store and display user turns
export const boardArray = [...Array(9).fill({ canUpdate: true, value: "" })];

export const players = [
    {
        name: "Player 1",
        shape: "X"
    },
    {
        name: "Player 2",
        shape: "O"
    }
];

//Array of winning pattern in tic tac toe game. Used to comapare and declare the result.
export const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
