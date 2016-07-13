// Created by jason.wollam on 7/1/2016.
// functions.tests.js

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var implementation = require('../functions.js');

describe("Functions: When invoking FunctionWithNoReturn",function(){
    it("it should contain the value of undefined", function(){
        //Act
        var result = implementation.FunctionWithNoReturn()

        //Assert
        assert.isUndefined(result);
    })
})

describe("Functions: When invoking TraditionalFunction", function(){
    it("it should return the same argument it is passed", function(){
        //Arrange
        var arguments = "FooBar";

        //Act
        var response = implementation.TraditionalFunction(arguments);

        //Assert
        assert.isOk(response === arguments);
    })

    it("it should return undefined if no argumetn is passed", function(){
        //Arrange

        //Act
        var response = implementation.TraditionalFunction();

        //Assert
        assert.isUndefined(response);
    })
})

describe("Functions: When invoking VarFunction", function(){
    it("it should return the same argument it is passed", function(){
        //Arrange
        var arguments = "FooBar";

        //Act
        var response = implementation.VarFunction(arguments);

        //Assert
        assert.isOk(response === arguments);
    })

    it("it should return undefined if no argument is passed", function(){
        //Arrange

        //Act
        var response = implementation.VarFunction();

        //Assert
        assert.isUndefined(response);
    })
})

describe("Functions: when invoking NoDefinedArgumentsWithPassedArguments ", function(){
    it("it should return the same argument it is passed by using the arguments array", function(){
        //Arrange
        var arguments = "FooBar";

        //Act
        var response = implementation.NoDefinedArgumentsWithPassedArguments(arguments);

        //Assert
        assert.isOk(response === arguments);
    })

    it("it should return undefined if no argument is passed", function(){
        //Arrange

        //Act
        var response = implementation.NoDefinedArgumentsWithPassedArguments();

        //Assert
        assert.isUndefined(response);
    })
})

describe("Functions: when invoking PassFunctionAsArgumentAndInvokeIt", function(){
    it("it should return the same the return value of the passed function", function(){
        //Arrange
        var arguments = function(){
            return "FooBar";
        };

        //Act
        var response = implementation.PassFunctionAsArgumentAndInvokeIt(arguments);

        //Assert
        assert.isOk(response === "FooBar");
    })

    it("it should FAIL if no argument is passed", function(){
        //Arrange

        //Act

        //Assert
        assert.throws(implementation.PassFunctionAsArgumentAndInvokeIt);
    })
})

describe("Functions: when invoking StoreAndUpdateVariableInFunctionClosure", function(){
    it("it should return the same value as the argument value passed to the function", function(){
        //Arrange
        var argument = "Foo";

        //Act

        //This first call sets the value in the internal variable to be stored and returned on
        //subsequent requests
        implementation.StoreAndUpdateVariableInFunctionClosure(argument)
        implementation.StoreAndUpdateVariableInFunctionClosure();

        var response = implementation.StoreAndUpdateVariableInFunctionClosure();

        //Assert
        assert.isOk(response === argument);
    })

    it("it should return undefined if no argument is passed", function(){
        //Arrange

        //Act
        var response = implementation.NoDefinedArgumentsWithPassedArguments();

        //Assert
        assert.isUndefined(response);
    })
})