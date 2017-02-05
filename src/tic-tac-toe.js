class TicTacToe {
    constructor() {
        this.namePlayer = 1;
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
