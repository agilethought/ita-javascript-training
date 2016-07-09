// Created by jason.wollam on 7/1/2016.
// loops.tests.js

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var implementation = require('../loops.js');

describe("Loops: When invoking For_Loop_Increment implementation", function(){
    it("it returns an array of 0 items when passed an array of 0 items", function(){
        //Arrange
        var inputProperty = [];

        //Act
        var response = implementation.For_Loop_Increment(inputProperty);

        //Assert
        assert.isOk(response.length === 0);
    })
    it("it returns an array of 2 items in the same order when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = ["foo", "bar"];

        //Act
        var response = implementation.For_Loop_Increment(inputProperty);

        //Assert
        assert.isOk(response.length === 2);
        assert.isOk(response[0] === "foo");
        assert.isOk(response[1] === "bar");
    })
})

describe("Loops: When invoking For_Loop_Decrement implementation", function(){
    it("it FAILS to return an array of 2 items in the same order when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = ["foo", "bar"];

        //Act
        var response = implementation.For_Loop_Decrement(inputProperty);

        //Assert
        assert.isOk(response.length === 2);
        assert.isNotOk(response[0] === "foo");
        assert.isNotOk(response[1] === "bar");

    })

    it("it FAILS to return an array of 2 items in the same order when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = ["foo", "bar"];

        //Act
        var response = implementation.For_Loop_Decrement(inputProperty);

        //Assert
        assert.isOk(response.length === 2);
        assert.isNotOk(response[0] === "foo");
        assert.isNotOk(response[1] === "bar");

    })

    it("it returns an array of 0 items when passed an array of 0 items", function(){
        //Arrange
        var inputProperty = [];

        //Act
        var response = implementation.For_Loop_Increment(inputProperty);

        //Assert
        assert.isOk(response.length === 0);
    })
})

describe("Loops: When invoking For_Loop_Increment_Altered_Collection implementation", function(){
    it("it FAILS to return an array of 2 items in the same order when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = ["foo", "bar"];

        //Act
        var response = implementation.For_Loop_Increment_Altered_Collection(inputProperty);

        //Assert
        assert.isNotOk(response.length === 2, "Failed to return all items in input array");
        assert.isOk(response[0] === "foo");
        assert.isNotOk(response[1] === "bar");
    })

    it("it returns an array of 1 item when passed an array of 1 items", function(){
        //Arrange
        var inputProperty = ["foo"];

        //Act
        var response = implementation.For_Loop_Increment_Altered_Collection(inputProperty);

        //Assert
        assert.isOk(response.length === 1);
        assert.isOk(response[0] === "foo");
    })

    it("it returns an array of 1 item when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = ["foo", "bar"];

        //Act
        var response = implementation.For_Loop_Increment_Altered_Collection(inputProperty);

        //Assert
        assert.isOk(response.length === 1);
        assert.isOk(response[0] === "foo");
    })
})

describe("Loops: When invoking For_Loop_Decrement_Altered_Collection implementation", function(){
    it("it FAILS to return an array of 2 items in the same order when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = ["foo", "bar"];

        //Act
        var response = implementation.For_Loop_Decrement_Altered_Collection(inputProperty);

        //Assert
        assert.isOk(response.length === 2);
        assert.isNotOk(response[0] === "foo");
        assert.isNotOk(response[1] === "bar");
    })

    it("it returns an array of 1 item when passed an array of 1 items", function(){
        //Arrange
        var inputProperty = ["foo"];

        //Act
        var response = implementation.For_Loop_Decrement_Altered_Collection(inputProperty);

        //Assert
        assert.isOk(response.length === 1);
        assert.isOk(response[0] === "foo");
    })

    it("it returns an array of 2 items in reverse order when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = ["foo", "bar"];

        //Act
        var response = implementation.For_Loop_Decrement_Altered_Collection(inputProperty);

        //Assert
        //noinspection JSUnresolvedFunction
        assert.isOk(response.length === 2);
        assert.isOk(response[1] === "foo");
        assert.isOk(response[0] === "bar");
    })
})

describe("Loops: When invoking While_Loop_Increment implementation", function(){
    it("it should return an array of 2 items in the same order when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = ["foo", "bar"];

        //Act
        var response = implementation.While_Loop_Increment(inputProperty, 0);

        //Assert
        assert.isOk(response.length)
        assert.isOk(response[0] === "foo");
        assert.isOk(response[1] === "bar");
    })
})

describe("Loops: When invoking While_Loop_Decrement implementation", function(){
    it("it FAILS to return an array of 2 items in the same order when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = ["foo", "bar"];

        //Act
        var response = implementation.While_Loop_Decrement(inputProperty, 0);

        //Assert
        assert.isOk(response.length);
        assert.isNotOk(response[0] === "foo");
        assert.isNotOk(response[1] === "bar")
    })
})


describe("Loops: When invoking For_In_Loop implementation", function(){
    it("it returns an object 2 items when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = {"foo" : "Foo", "bar" : "Bar"};

        //Act
        var response = implementation.For_In_Loop(inputProperty);

        //Assert
        assert.isOk(response.hasOwnProperty("foo"), "Does not contain foo!");
        assert.isOk(response.hasOwnProperty("bar"), "Does not contain bar!");
        assert.isOk(response.foo === "Foo")
        assert.isOk(response.bar === "Bar")
    })
})

describe("Loops: When invoking For_In_Loop implementation", function(){
    it("it returns an object 2 items when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = {"foo" : "Foo", "bar" : "Bar"};

        //Act
        var response = implementation.For_In_Loop(inputProperty);

        //Assert
        assert.isOk(response.hasOwnProperty("foo"), "Does not contain foo!");
        assert.isOk(response.hasOwnProperty("bar"), "Does not contain bar!");
        assert.isOk(response.foo === "Foo")
        assert.isOk(response.bar === "Bar")
    })
})

describe("Loops: When invoking the Array_Foreach_Loop implementation", function(){
    it("it returns an array of 2 items in the same order when passed an array of 2 items", function(){
        //Arrange
        var inputProperty = ["foo", "bar"];

        //Act
        var response = implementation.Array_Foreach_Loop(inputProperty, 0);

        //Assert
        assert.isOk(response.length);
        assert.isOk(response[0] === "foo");
        assert.isOk(response[1] === "bar")
    })
})