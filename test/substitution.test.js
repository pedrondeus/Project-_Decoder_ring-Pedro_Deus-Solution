// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it("Should return 'jrufscpw'", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })

    it("Should return 'elp xhm xf mbymwwmfj dne'", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.equal(expected);
    })

    it("Should return 'thinkful'", () => {
        const expected = "thinkful";
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        expect(actual).to.equal(expected);
    })

    it("Should return 'y&ii$r&'", () => {
        const expected = "y&ii$r&";
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    })

    it("Should return 'message'", () => {
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    })

    it("Should return false", () => {
        const actual = substitution("thinkful", "short"); //> false
        expect(actual).to.be.false;
    })

    it("Should return false", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        expect(actual).to.be.false;
    })
})