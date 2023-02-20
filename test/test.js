var chai = require("chai");  
var expect = chai.expect;

require("../src/index");

describe("capital-case-r2", function() {
  describe("Function `String.prototype.toCapitalCase(ignoreCase)`", function() {

    var str1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    var str2 = "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.";

    var str3 = "This word is UPPER CASE.";
    var str4 = "This Word Is UPPER CASE.";
    var str5 = "This Word Is Upper Case.";
    
    it("ignoreCase = true (default)", function() {
      expect(str1.toCapitalCase()).to.equal(str2);
      expect(str3.toCapitalCase()).to.equal(str4);
    });

    it("ignoreCase = false", function() {
      expect(str3.toCapitalCase(false)).to.equal(str5);
    });
  });
});