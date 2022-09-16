// Write your tests here!
const {expect} = require("chai");
const {polybius} = require("../src/polybius");


describe("caesar", () => {
    it("'Thinkful' should return 4432423352125413", () => {
        const expected = "4432423352125413";
        const actual = polybius("Thinkful");
        expect(actual).to.equal(expected);
    })

    it("'Hello world' should return '3251131343 2543241341'", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected);
    })

    it("'3251131343 2543241341' should return 'hello world'", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    })

    it("'4432423352125413' should return 'th(i/j)nkful'", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    })

    it("'44324233521254134' should return false", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    })
})

