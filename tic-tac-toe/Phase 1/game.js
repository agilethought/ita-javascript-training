/**
 * Created by Jason Wollam on 6/25/2016.
 */

//game.js

module.exports = function() {
    var isX = true;
    var player = "X";
    var gameBoard = ['E', 'E', 'E',
                    'E', 'E', 'E',
                    'E', 'E', 'E']

    var checkForWinningMove = function(){
        var rowArray = [];
        var colArray = [];
        var rowsIndex = 0;


        while(rowsIndex < 9){
            rowArray = gameBoard.slice(rowsIndex, (rowsIndex + 3));
            gameBoard.forEach(function(value, index, array){
                if(rowsIndex < 3){
                    colArray.push(value);
                    colArray.push(value + 3);
                    colArray.push(value + 6);
                }
            });

            //Test rows
            if(rowArray.every(function(value){ return value === player })){
                return true;
            }

            //Test cols
            if(colArray.every(function(value){ return value === player })){
                return true;
            }

            rowsIndex = (rowsIndex + 3);
        }
        return false;
    }

    function setPlayer() {
        player = (isX)? "X" : "O"
    }

    var playTurn = function(boardIndex){
        isX = !isX;
        setPlayer();
        gameBoard[boardIndex] = player;

        return checkForWinningMove();
    }

    return {PlayTurn : playTurn}
}();