// Created by jason.wollam on 7/1/2016.
// conditionals.js

var If_ElseIf_Else = function(testParam1, testParam2, testParam3){
    var ifReturnValue = "True";
    var elseReturnValue = "False";
    var elseIfReturnValue = "ElseIfTrue";
    var skippedValue = "Skipped";

    if(testParam1 == testParam2){

        return ifReturnValue;

    }else if(testParam1 == testParam3){

        return elseIfReturnValue;

    }else{

        return elseReturnValue;
    }

    return skippedValue;

}

var If_And = function(testParam1, testParam2, testParam3){
    var ifReturnValue = "True";
    var skippedValue = "Skipped";

    if(testParam1 == testParam2 && testParam2 == testParam3){
        return ifReturnValue;
    }

    return skippedValue;
}

var If_Or = function(testParam1, testParam2, testParam3){
    var ifReturnValue = "True";
    var skippedValue = "Skipped";

    if(testParam1 == testParam2 || testParam2 == testParam3){
        return ifReturnValue;
    }

    return skippedValue;
}

module.exports = {
    If_ElseIf_Else : If_ElseIf_Else,
    If_And : If_And,
    If_Or : If_Or
}
