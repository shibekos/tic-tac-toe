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
        if (this.namePlayer == 1) {
            return "x" {
        } else {
            return "o"
        }
      }
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] == null){
        if (this.namePlayer == 1){
          this.field[rowIndex][columnIndex] = 'x'
          this.namePlayer = 2
        }else{
          this.field[rowIndex][columnIndex] = 'o'
          this.namePlayer = 1
        }
      }
    }

    isFinished() {
      if((this.getWinner() !== null) || (this.isDraw() == true)){
        return true
      }else{
        return false
      }
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
