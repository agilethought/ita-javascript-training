/**
 * Created by jason.wollam on 7/6/2016.
 */

//variables.js

var ReturnDefaultVariableStateUndefined = function(argument){
    return argument;
}

var ReturnBooleanTypeWhenArgumentPassIsBoolean = function(argument){
    var returnValue;

    if(typeof argument === "boolean"){
        returnValue = argument
    }

    return returnValue;
}

var ReturnStringTypeWhenArgumentPassIsString = function(argument){
    var returnValue;

    if(typeof argument === "string"){
        returnValue = argument
    }

    return returnValue;
}

var ReturnNumberTypeWhenArgumentPassIsNumber = function(argument){
    var returnValue;

    if(typeof argument === "number"){
        returnValue = argument
    }

    return returnValue;
}

var ReturnObjectTypeWhenArgumentPassIsNull = function(argument){
    var returnValue;

    if(typeof argument === "object"){
        returnValue = argument
    }

    return returnValue;
}

var ReturnObjectTypeWhenArgumentPassIsObject = function(argument){
    var returnValue;

    if(typeof argument === "object"){
        returnValue = argument
    }

    return returnValue;
}

var ReturnObjectTypeWhenArgumentPassIsArray = function(argument){
    var returnValue;

    if(typeof argument === "object"){
        returnValue = argument
    }

    return returnValue;
}


module.exports = {
    ReturnDefaultVariableStateUndefined : ReturnDefaultVariableStateUndefined,
    ReturnBooleanTypeWhenArgumentPassIsBoolean : ReturnBooleanTypeWhenArgumentPassIsBoolean,
    ReturnStringTypeWhenArgumentPassIsString : ReturnStringTypeWhenArgumentPassIsString,
    ReturnNumberTypeWhenArgumentPassIsNumber : ReturnNumberTypeWhenArgumentPassIsNumber,
    ReturnObjectTypeWhenArgumentPassIsNull : ReturnObjectTypeWhenArgumentPassIsNull,
    ReturnObjectTypeWhenArgumentPassIsObject : ReturnObjectTypeWhenArgumentPassIsObject,
    ReturnObjectTypeWhenArgumentPassIsArray : ReturnObjectTypeWhenArgumentPassIsArray
}