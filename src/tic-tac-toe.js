class TicTacToe {
    constructor() {
        this.namePlayer = 1;
        this.field = [[null],[null],[null]];
        this.gameChampinion = null;
        this.gamePoint = 0;
    }

    getCurrentPlayerSymbol() {
       return this.namePlayer;
    }

     nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] != null) {
            return;
        }
        this.action++;

        if ( (this.field[0][0] && this.field[0][0] === this.field[1][0] && this.field[0][0] === this.field[2][0]) ||
            (this.field[0][1] && this.field[0][1] === this.field[1][1] && this.field[0][1] === this.field[2][1]) ||
            (this.field[0][2] && this.field[0][2] === this.field[1][2] && this.field[0][2] === this.field[2][2]) ||
            (this.field[0][0] && this.field[0][0] === this.field[0][1] && this.field[0][0] === this.field[0][2]) ||
            (this.field[1][0] && this.field[1][0] === this.field[1][1] && this.field[1][0] === this.field[1][2]) ||
            (this.field[2][0] && this.field[2][0] === this.field[2][1] && this.field[2][0] === this.field[2][2]) ||
            (this.field[0][0] && this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) ||
            (this.field[0][2] && this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) )

        { this.gameChampinion = this.namePlayer; }

        this.namePlayer = (this.namePlayer == 'x') ? 'o' : 'x';
    }

    isFinished() {
        return (this.noMoreTurns() === true || this.getWinner() != null) ?  true :  false;
    }

    getWinner() {
        return (this.gameChampinion == null) ? null : this.gameChampinion;
    }

    noMoreTurns() {

        return (this.gamePoint == 9) ? true : false;
    }

    isDraw() {
        return (this.getWinner() == null && this.noMoreTurns() == true) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field;
    }
}

module.exports = TicTacToe;