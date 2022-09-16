// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar", () => {
    it("Should return 'wklqnixo'", () => {
        const expected = "wklqnixo";
        const actual = caesar("Thinkful", 3);
        expect(actual).to.equal(expected);
    })

    it("Should return 'qefkhcri'", () => {
        const expected = "qefkhcri";
        const actual = caesar("thinkful", -3);
        expect(actual).to.eql(expected);
    })

    it("If encode = false, 'wklqnixo' should return 'thinkful'", () => {      
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.eql(expected);
    })
  
    it("Should return 'bpqa qa i amkzmb umaaiom!'", () => {
       
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.eql(expected);
    })

    it("If encode = false, 'wklqnixo' should return 'this is a secret message!'", () => {      
        const expected = "this is a secret message!";
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.eql(expected);
    })

    it("Expected 'thinkful' to be false", () => {
        const actual = caesar("thinkful");
        expect(actual).to.be.false;
    })

    it("If encode = false, 'wklqnixo' should return 'thinkful'", () => {
        const actual = caesar("thinkful", 99);
        expect(actual).to.be.false;
    })

    it("If encode = false, 'wklqnixo' should return 'thinkful'", () => {
        const actual = caesar("thinkful", -26);
        expect(actual).to.be.false;
    })
  })
 
