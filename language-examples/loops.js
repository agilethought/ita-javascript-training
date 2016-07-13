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

var While_Loop_Increment = function(collection){
    var response = [];
    var iterator = 0;

    while(iterator < collection.length){
        response.push(collection[iterator ]);
        iterator++;
    }

    return response;
}

var While_Loop_Decrement = function(collection){
    var response = [];
    var iterator = collection.length;

    while(iterator > 0){
        response.push(collection[iterator - 1]);
        iterator--;
    }

    return response;
}

var While_Loop_Conditionally_Increment = function(collection){
    var response = [];
    var iterator = 0;

    while(iterator < collection.length){
        response.push(collection[iterator ]);
        if(iterator === 1){
            iterator = (iterator + 2);
        }else{
            iterator++;
        }
    }

    return response;
}

var For_In_Loop = function(collection){
    var response = {};

    for( property in collection){
        response[property] = collection[property]
    }

    return response;
}

var Array_Foreach_Loop = function(collection){
    var response = [];

    collection.forEach(function(currentValue, index, arr){
        response.push(currentValue);
    })

    return response;
}

module.exports = {
    For_In_Loop: For_In_Loop,
    While_Loop_Increment : While_Loop_Increment,
    While_Loop_Decrement: While_Loop_Decrement,
    While_Loop_Conditionally_Increment : While_Loop_Conditionally_Increment,
    For_Loop_Increment : For_Loop_Increment,
    For_Loop_Decrement : For_Loop_Decrement,
    For_Loop_Decrement_Altered_Collection : For_Loop_Decrement_Altered_Collection,
    For_Loop_Increment_Altered_Collection : For_Loop_Increment_Altered_Collection,
    Array_Foreach_Loop : Array_Foreach_Loop
}