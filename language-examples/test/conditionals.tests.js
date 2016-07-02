// Created by jason.wollam on 7/1/2016.

// conditionals.js

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect();

var implementation = require('../conditionals.js');

describe("Conditionals: When invoking If_ElseIf_Else", function(){
    it("it should return the ifReturnValue 'True' when 1, 1 are sent as parameters", function(){
        //Arrange
        var param1 = 1;
        var param2 = 1;
        var param3 = 3;

        //Act
        var result = implementation.If_ElseIf_Else(param1, param2, param3);

        //Assert
        assert(result === 'True');
    })
    it("it should return the ifReturnValue 'ElseIfTrue' when 1, 2, 1 are sent as parameters", function(){
        //Arrange
        var param1 = 1;
        var param2 = 2;
        var param3 = 1;

        //Act
        var result = implementation.If_ElseIf_Else(param1, param2, param3);

        //Assert
        assert(result === 'ElseIfTrue');
    })

    it("it should return the False 'ThenTrue' when 1, 2, 1 are sent as parameters", function(){
        //Arrange
        var param1 = 1;
        var param2 = 2;
        var param3 = 3;

        //Act
        var result = implementation.If_ElseIf_Else(param1, param2, param3);

        //Assert
        assert(result === 'False');
    })
})

describe("Conditionals: When invoking If_And", function(){
    it("it should return 'True' when 1, 1, 1 are sent as parameters", function(){
        //Arrange
        var param1 = 1;
        var param2 = 1;
        var param3 = 1;

        //Act
        var result = implementation.If_And(param1, param2, param3);

        //Assert
        assert(result === "True")
    })

    it("it should return 'Skipped' when 1, 2, 3 are sent as parameters", function(){
        //Arrange
        var param1 = 1;
        var param2 = 1;
        var param3 = 1;

        //Act
        var result = implementation.If_And(param1, param2, param3);

        //Assert
        assert(result === "True")
    })
})

describe("Conditionals: When invoking If_Or", function(){
    it("it should return 'True' when 1, 2, 2 are sent as parameters", function(){
        //Arrange
        var param1 = 1;
        var param2 = 2;
        var param3 = 2;

        //Act
        var result = implementation.If_Or(param1, param2, param3);

        //Assert
        assert(result === "True")
    })

    it("it should return 'True' when 2, 2, 1 are sent as parameters", function(){
        //Arrange
        var param1 = 2;
        var param2 = 2;
        var param3 = 1;

        //Act
        var result = implementation.If_Or(param1, param2, param3);

        //Assert
        assert(result === "True")
    })

    it("it should return 'Skipped' when 1, 2, 3 are sent as parameters", function(){
        //Arrange
        var param1 = 1;
        var param2 = 2;
        var param3 = 3;

        //Act
        var result = implementation.If_Or(param1, param2, param3);

        //Assert
        assert(result === "Skipped")
    })
})