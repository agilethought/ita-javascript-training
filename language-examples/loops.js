// Created by jason.wollam on 7/1/2016.
// loops.js

var For_Loop_Increment = function(collection){
    var response = [];

    for(var i = 0; i < collection.length; i++){
        response.push(collection[i]);
    }

    return response;
}

var For_Loop_Decrement = function(collection){
    var response = [];

    for(var i = (collection.length); i > 0; i--){
        response.push(collection[i - 1]);
    }

    return response;
}

var For_Loop_Increment_Altered_Collection = function(collection){
    var response = [];

    for(var i = 0; i < collection.length; i++){
        response.push(collection[i]);
        collection.pop();
    }

    return response;
}

var For_Loop_Decrement_Altered_Collection = function(collection){
    var response = [];

    for(var i = (collection.length); i > 0; i--){
        response.push(collection[i - 1])
        collection.pop();
    }

    return response;
}

var While_Loop = function(collection, iterator){
    var response = [];

    while(iterator < collection.length){
        response.push(collection[iterator ]);
        iterator++;
    }

    return response;
}

module.exports = {
    While_Loop : While_Loop,
    For_Loop_Increment : For_Loop_Increment,
    For_Loop_Decrement : For_Loop_Decrement,
    For_Loop_Decrement_Altered_Collection : For_Loop_Decrement_Altered_Collection,
    For_Loop_Increment_Altered_Collection : For_Loop_Increment_Altered_Collection
}