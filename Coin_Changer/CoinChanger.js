/**
 * Created by stephen.villot on 6/24/2016.
 */
var coinChangerMain = function(cents)
{
    var change = { "quarters": 0, "dimes": 0, "nickels": 0, "pennies": 0};

    while (cents != 0)
    {
        if (cents >= 25)
        {
            change["quarters"] += 1;
            cents -= 25;
        }
        else if (cents >= 10)
        {
            change["dimes"] += 1;
            cents -= 10;
        }
        else if (cents >= 5)
        {
            change["nickels"] += 1;
            cents -= 5;
        }
        else
        {
            change["pennies"] += 1;
            cents -= 1;
        }
    }

    return change;
};

var CoinChangerViewHandler = function()
{
    var cents = document.getElementById('cents').value;
    var change = coinChangerMain(cents);
    var inputElement = document.getElementById('result');
    var injection = document.createElement('ul');
    for(coin in change)
    {
        var outputString = coin + ': ' + change[coin];
        var listElement = document.createElement('li');
        listElement.innerHTML = outputString;
        injection.appendChild(listElement);
    }
    
    inputElement.innerHTML = injection.innerHTML;
};

var CoinChangerLoop = function ()
{
    var inputElement = document.getElementById('loop');
    for (var i = 1; i < 100; i++)
    {
        var change = coinChangerMain(i);
        var header = document.createElement('p');
        header.innerHTML = "Cents: " + i;
        inputElement.appendChild(header);
        var injection = document.createElement('ul');
        for(coin in change)
        {
            var outputString = coin + ': ' + change[coin];
            var listElement = document.createElement('li');
            listElement.innerHTML = outputString;
            injection.appendChild(listElement);
        }

        inputElement.appendChild(injection);
    }
};

if (typeof module !== "undefined")
{
    module.exports = {
        CoinChangerMain : coinChangerMain
    };
}
