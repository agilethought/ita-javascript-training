/**
 * Created by stephen.villot on 6/24/2016.
 */
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect();

var scriptToTest = require('../CoinChanger.js');
var coinChangerMain = scriptToTest.CoinChangerMain;

describe('Coin changer tests', function()
{
    it('should test 1 cent', function()
    {
        var change = coinChangerMain(1);

        assert.equal(change["quarters"], 0);
        assert.equal(change["dimes"], 0);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 1);
    });

    it('should test 2 cents', function()
    {
        var change = coinChangerMain(2);

        assert.equal(change["quarters"], 0);
        assert.equal(change["dimes"], 0);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 2);
    });

    it('should test 4 cents', function()
    {
        var change = coinChangerMain(4);

        assert.equal(change["quarters"], 0);
        assert.equal(change["dimes"], 0);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 4);
    });

    it('should test 5 cents', function()
    {
        var change = coinChangerMain(5);

        assert.equal(change["quarters"], 0);
        assert.equal(change["dimes"], 0);
        assert.equal(change["nickels"], 1);
        assert.equal(change["pennies"], 0);
    });

    it('should test 9 cents', function()
    {
        var change = coinChangerMain(9);

        assert.equal(change["quarters"], 0);
        assert.equal(change["dimes"], 0);
        assert.equal(change["nickels"], 1);
        assert.equal(change["pennies"], 4);
    });

    it('should test 10 cents', function()
    {
        var change = coinChangerMain(10);

        assert.equal(change["quarters"], 0);
        assert.equal(change["dimes"], 1);
        assert.equal(change["nickels"], !2);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 0);
    });

    it('should test 12 cents', function()
    {
        var change = coinChangerMain(12);

        assert.equal(change["quarters"], 0);
        assert.equal(change["dimes"], 1);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 2);
    });

    it('should test 20 cents', function()
    {
        var change = coinChangerMain(20);

        assert.equal(change["quarters"], 0);
        assert.equal(change["dimes"], 2);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 0);
    });

    it('should test 21 cents', function()
    {
        var change = coinChangerMain(21);

        assert.equal(change["quarters"], 0);
        assert.equal(change["dimes"], 2);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 1);
    });

    it('should test 25 cents', function()
    {
        var change = coinChangerMain(25);

        assert.equal(change["quarters"], 1);
        assert.equal(change["dimes"], 0);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 0);
    });

    it('should test 32 cents', function()
    {
        var change = coinChangerMain(32);

        assert.equal(change["quarters"], 1);
        assert.equal(change["dimes"], 0);
        assert.equal(change["nickels"], 1);
        assert.equal(change["pennies"], 2);
    });

    it('should test 41 cents', function()
    {
        var change = coinChangerMain(41);

        assert.equal(change["quarters"], 1);
        assert.equal(change["dimes"], 1);
        assert.equal(change["nickels"], 1);
        assert.equal(change["pennies"], 1);
    });

    it('should test 47 cents', function()
    {
        var change = coinChangerMain(47);

        assert.equal(change["quarters"], 1);
        assert.equal(change["dimes"], 2);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 2);
    });

    it('should test 50 cents', function()
    {
        var change = coinChangerMain(50);

        assert.equal(change["quarters"], 2);
        assert.equal(change["dimes"], 0);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 0);
    });

    it('should test 56 cents', function()
    {
        var change = coinChangerMain(56);

        assert.equal(change["quarters"], 2);
        assert.equal(change["dimes"], 0);
        assert.equal(change["nickels"], 1);
        assert.equal(change["pennies"], 1);
    });

    it('should test 68 cents', function()
    {
        var change = coinChangerMain(68);

        assert.equal(change["quarters"], 2);
        assert.equal(change["dimes"], 1);
        assert.equal(change["nickels"], 1);
        assert.equal(change["pennies"], 3);
    });

    it('should test 75 cents', function()
    {
        var change = coinChangerMain(75);

        assert.equal(change["quarters"], 3);
        assert.equal(change["dimes"], 0);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 0);
    });

    it('should test 89 cents', function()
    {
        var change = coinChangerMain(89);

        assert.equal(change["quarters"], 3);
        assert.equal(change["dimes"], 1);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 4);
    });

    it('should test 99 cents', function()
    {
        var change = coinChangerMain(99);

        assert.equal(change["quarters"], 3);
        assert.equal(change["dimes"], 2);
        assert.equal(change["nickels"], 0);
        assert.equal(change["pennies"], 4);
    });
});