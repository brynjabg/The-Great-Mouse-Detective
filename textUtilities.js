var expect = require("chai").expect;

console.log("do u hear me friend")

function titleCase(title) {
    var words = title.split(" ");
    var titleCasedWords = words.map(function (word) {
        return word[0].toUpperCase() + word.substring(1);
    });

    return titleCasedWords.join(" ");
}

describe("titleCase", () => {
    it("returns a string", () => {
        expect(titleCase("the great mouse detective")).to.be.a("string");
    });

    it("capitalizes the first letter of a word", () => {
        expect(titleCase("a")).to.equal("A");
        expect(titleCase("vertigo")).to.equal("Vertigo");
        expect(titleCase("the great mouse detective")).to.equal("The Great Mouse Detective");
    });
});
