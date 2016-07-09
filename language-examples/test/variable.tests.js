/**
 * Created by jason.wollam on 7/6/2016.
 */

// variable.tests.js

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var implementation = require('../variables.js');

describe("Variables: When invoking ReturnDefaultVariableStateUndefined", function(){
    it("should return the default variable state 'undefined'", function(){
        //Act
        var returnValue = implementation.ReturnDefaultVariableStateUndefined();

        //Assert
        assert.isUndefined(returnValue)
    })
})

describe("Variables: When invoking ReturnBooleanTypeWhenArgumentPassIsBoolean", function(){
    it("should return a variable with a type of boolean when passed an argument with type of boolean", function(){
        //Arrange
        var argument = true;

        //Act
        var returnValue = implementation.ReturnBooleanTypeWhenArgumentPassIsBoolean(argument);

        //Assert
        assert.isBoolean(returnValue)
    })
    it("should return a variable with a type of undefined when not passed an argument with type not boolean", function(){
        //Arrange
        var argument = "FooBar";

        //Act
        var returnValue = implementation.ReturnBooleanTypeWhenArgumentPassIsBoolean(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "boolean")
        assert.isUndefined(returnValue);
    })
})

describe("Variables: When invoking ReturnStringTypeWhenArgumentPassIsString", function(){
    it("should return a variable with a type of string when passed an argument with type of string", function(){
        //Arrange
        var argument = "FooBar";

        //Act
        var returnValue = implementation.ReturnStringTypeWhenArgumentPassIsString(argument);

        //Assert
        assert.isString(returnValue)
    })
    it("should return a variable with a type of undefined when not passed an argument with type not string", function(){
        //Arrange
        var argument = 0;

        //Act
        var returnValue = implementation.ReturnStringTypeWhenArgumentPassIsString(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "string");
        assert.isUndefined(returnValue);
    })
})