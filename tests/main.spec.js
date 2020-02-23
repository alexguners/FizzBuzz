import { expect } from "chai";
import FizzBuzz from "../src/main";

describe("FizzBuzz", () => {
  it("should return `Fizz` when number is multiple of 3", () => {
    expect(FizzBuzz(3)).to.be.equal("Fizz");
  });

  it("should return `Buzz` when number is multiple of 5", () => {
    expect(FizzBuzz(5)).to.be.equal("Buzz");
  });

  it("should return `FizzBuzz` when number is multiple of 3 and 5", () => {
    expect(FizzBuzz(15)).to.be.equal("FizzBuzz");
  });

  it("should return the same number when non-multiple of 3 and 5", () => {
    expect(FizzBuzz(4)).to.be.equal(4);
  });

  it("should return 0 when number is 0", () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
