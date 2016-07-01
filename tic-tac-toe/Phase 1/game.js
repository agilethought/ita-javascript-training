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
        var rowsIndex = 0;
        var rowArray = [];
        var colArray = [];
        var leftDiagArray = [];
        var rightDiagArray = [];

        //Fill Diagonal Test Arrays
        gameBoard.forEach(function(value, index, array){
            //Fill Diagonal Test Arrays
            if(index == 0 || index == 4 || index == 9){
                leftDiagArray.push(value);
            }

            //Fill Diagonal Test Arrays
            if(index == 2 || index == 4 || index == 6){
                rightDiagArray.push(value);
            }
        })

        //Test left diagonal
        if(leftDiagArray.every(function(value){ return value === player })){
            return true;
        }

        //Test right diagonal
        if(rightDiagArray.every(function(value){ return value === player })){
            return true;
        }

        //Fill Vertical Test Arrays
        for(var i = 0; i < 3; i++){
            colArray.push(gameBoard[i]);
            colArray.push(gameBoard[i + 3]);
            colArray.push(gameBoard[i + 6]);

            //Test cols
            if(colArray.every(function(value){ return value === player })){
                return true;
            }
        }

        while(rowsIndex < 9){
            //Fill Horizontal Test Array
            rowArray = gameBoard.slice(rowsIndex, (rowsIndex + 3));

            //Test rows
            if(rowArray.every(function(value){ return value === player })){
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