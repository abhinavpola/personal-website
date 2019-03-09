function evaluateBoard(boardState) {


    if (boardState == null || boardState.length != 9) {
        return "Evaluation.InvalidInput";
    }

    // using regex to select all of the given character (case insensitive) and store length of the resulting string
    var xCount = boardState.replace("(?i)[^x]/g", "").length;
    var oCount = boardState.replace("(?i)[^o]/g", "").length;

    // checking for any skipped turns, assuming X moves first
    if (oCount > xCount || (xCount - oCount) > 1) {
        return "Evaluation.UnreachableState";
    }

    const board = boardState.toLowerCase();

    //initial winner state
    var xWon = false;
    var oWon = false;

    //checks for 3 columns + 3 rows + 2 diagonals, 8 possible win scenarios
    for (var i = 0; i < 8; i++) {
        var line = "";
        switch (i) {
        case 0:
            line = "" + board[0] + board[1] + board[2];
            break;
        case 1:
            line = "" + board[3] + board[4] + board[5];
            break;
        case 2:
            line = "" + board[6] + board[7] + board[8];
            break;
        case 3:
            line = "" + board[0] + board[3] + board[6];
            break;
        case 4:
            line = "" + board[1] + board[4] + board[7];
            break;
        case 5:
            line = "" + board[2] + board[5] + board[8];
            break;
        case 6:
            line = "" + board[0] + board[4] + board[8];
            break;
        case 7:
            line = "" + board[2] + board[4] + board[6];
            break;
        }

        if (line == "xxx") {
            xWon = true;
        }
        if (line == "ooo") {
            oWon = true;
        }

        if (xWon && oWon) {
            return "Evaluation.UnreachableState";
        }

    }

    //check for turn after win
    if ((xWon && xCount == oCount) || (oWon && xCount > oCount)) {
        return "Evaluation.UnreachableState";
    }

    if (xWon) {
        return "Evaluation.Xwins";
    } else if (oWon) {
        return "Evaluation.Owins";
    } else {
        return "Evaluation.NoWinner";
    }
}

module.exports = {evaluateBoard};