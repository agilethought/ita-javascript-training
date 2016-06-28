/**
 * Created by Jason Wollam on 6/26/2016.
 */

//TicTacToeTests.js

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect();

var scriptToTest = require('../game.js');
var playTurn = scriptToTest;


describe("When executing the PlayTurn method", function(){
    it("should not throw an exception", function(){

        //playTurn(3);

        assert.doesNotThrow(function(){
            scriptToTest.PlayTurn(0);
            scriptToTest.PlayTurn(4)
        });
    });

    it("should return a winning condition", function(){

        scriptToTest.PlayTurn(0);
        scriptToTest.PlayTurn(4);
        scriptToTest.PlayTurn(1);
        scriptToTest.PlayTurn(5);

        var returnValue = scriptToTest.PlayTurn(2);

        assert(returnValue);
    });

});

