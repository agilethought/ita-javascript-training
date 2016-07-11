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
        //Arrange
        var argument;

        //Act
        var returnValue = implementation.ReturnDefaultVariableStateUndefined(argument);

        //Assert
        assert.isUndefined(returnValue)
    });
});

describe("Variables: When invoking ReturnBooleanTypeWhenArgumentPassIsBoolean", function(){
    it("should return a variable with a type of boolean when passed an argument with type of boolean", function(){
        //Arrange
        var argument = true;

        //Act
        var returnValue = implementation.ReturnBooleanTypeWhenArgumentPassIsBoolean(argument);

        //Assert
        assert.isBoolean(returnValue)
    });
    it("should return a variable with a type of undefined when not passed an argument with type not boolean", function(){
        //Arrange
        var argument = "FooBar";

        //Act
        var returnValue = implementation.ReturnBooleanTypeWhenArgumentPassIsBoolean(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "boolean")
        assert.isUndefined(returnValue);
    });
    it("should FAIL to return a variable with a type of boolean when passed an argument as boolean created with new initializer", function(){
        //Arrange
        var argument = new Boolean();

        //Act
        var returnValue = implementation.ReturnBooleanTypeWhenArgumentPassIsBoolean(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "boolean")
        assert.isUndefined(returnValue);
    });
});

describe("Variables: When invoking ReturnStringTypeWhenArgumentPassIsString", function(){
    it("should return a variable with a type of string when passed an argument with type of string", function(){
        //Arrange
        var argument = "FooBar";

        //Act
        var returnValue = implementation.ReturnStringTypeWhenArgumentPassIsString(argument);

        //Assert
        assert.isString(returnValue);
    });
    it("should return a string variable with a length property when passed an argument with type of string", function(){
        //Arrange
        var argument = "FooBar";

        //Act
        var returnValue = implementation.ReturnStringTypeWhenArgumentPassIsString(argument);

        //Assert
        assert.isString(returnValue);
        assert.isOk(returnValue.length);
});
    it("should return a variable with a type of undefined when not passed an argument with type not string", function(){
        //Arrange
        var argument = 0;

        //Act
        var returnValue = implementation.ReturnStringTypeWhenArgumentPassIsString(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "string");
        assert.isUndefined(returnValue);
    });
    it("should FAIL to return a variable with a type of string when passed an argument as string created with new initializer", function(){
        //Arrange
        var argument = new String("FooBar");

        //Act
        var returnValue = implementation.ReturnStringTypeWhenArgumentPassIsString(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "string")
        assert.isUndefined(returnValue);
    });
});

describe("Variables: When invoking ReturnNumberTypeWhenArgumentPassIsNumber", function(){
    it("should return a variable with a type of number when passed an argument with type of number", function(){
        //Arrange
        var argument = 1;

        //Act
        var returnValue = implementation.ReturnNumberTypeWhenArgumentPassIsNumber(argument);

        //Assert
        assert.isNumber(returnValue);
    });
    it("should return a variable with a type of undefined when not passed an argument with type not number", function(){
        //Arrange
        var argument = "foo";

        //Act
        var returnValue = implementation.ReturnNumberTypeWhenArgumentPassIsNumber(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "number");
        assert.isUndefined(returnValue);
    });
    it("should FAIL to return a variable with a type of number when passed an argument as number created with new initializer", function(){
        //Arrange
        var argument = new Number(25);

        //Act
        var returnValue = implementation.ReturnNumberTypeWhenArgumentPassIsNumber(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "number");
        assert.isUndefined(returnValue);
    });
});

describe("Variables: When invoking ReturnObjectTypeWhenArgumentPassIsNull", function(){
    it("should return a variable with a type of object when passed an argument with type of null", function(){
        //Arrange
        var argument = null;

        //Act
        var returnValue = implementation.ReturnObjectTypeWhenArgumentPassIsNull(argument);

        //Assert
        assert.isNull(returnValue);
    });
    it("should return a variable with a type of undefined when not passed an argument with type not null", function(){
        //Arrange
        var argument = "foo";

        //Act
        var returnValue = implementation.ReturnObjectTypeWhenArgumentPassIsNull(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "object");
        assert.isUndefined(returnValue);
    });
});

describe("Variables: When invoking ReturnObjectTypeWhenArgumentPassIsObject", function(){
    it("should return a variable with a type of object when passed an argument with type of object", function(){
        //Arrange
        var argument = {
            "Foo" : "foo",
            "BaR" : "bar"
        };

        //Act
        var returnValue = implementation.ReturnObjectTypeWhenArgumentPassIsObject(argument);

        //Assert
        assert.isObject(returnValue);
    });
    it("should return a variable with a type of undefined when not passed an argument with type not object", function(){
        //Arrange
        var argument = "foo";

        //Act
        var returnValue = implementation.ReturnObjectTypeWhenArgumentPassIsObject(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "object");
        assert.isUndefined(returnValue);
    });
});

describe("Variables: When invoking ReturnObjectTypeWhenArgumentPassIsArray", function(){
    it("should return a variable with a type of object when passed an argument with type of object", function(){
        //Arrange
        var argument = ["One","Two","Three","Four","Five"];

        //Act
        var returnValue = implementation.ReturnObjectTypeWhenArgumentPassIsArray(argument);

        //Assert
        assert.isArray(returnValue);
        assert.isOk(returnValue.length === 5);
    });
    it("should return a variable with a type of undefined when not passed an argument with type not object", function(){
        //Arrange
        var argument = "foo";

        //Act
        var returnValue = implementation.ReturnObjectTypeWhenArgumentPassIsArray(argument);

        //Assert
        assert.isNotOk(typeof returnValue === "object");
        assert.isUndefined(returnValue);
    });
});
