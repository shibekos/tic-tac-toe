class TicTacToe {
    constructor() {
        this.namePlayer = 1
        this.field = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
        ]
    }

    getCurrentPlayerSymbol() {
        if (this.namePlayer === 1) {
            return "x" {
        } else {
            return "o"
        }
      }
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.Board[rowIndex][columnIndex]){
            if(this.CurrentSymbol === 'x'){
                this.Board[rowIndex][columnIndex] = 'x';
                this.CurrentSymbol = 'o'; 
            } else {
                this.Board[rowIndex][columnIndex] = 'o';
                this.CurrentSymbol = 'x';
            }
        }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
