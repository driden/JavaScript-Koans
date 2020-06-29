describe("About Numbers (topics/02_about_numbers.js)", function () {
  it("types", function () {
    let typeOfIntegers = typeof 6;
    let typeOfFloats = typeof 3.14159;
    expect(true).toEqual(
      typeOfIntegers === typeOfFloats,
      "are ints and floats the same type?"
    );
    expect("number").toBe(typeOfIntegers, "what is the javascript numeric type?");
    expect(1).toBe(1.0, "what is a integer number equivalent to 1.0?");
  });

  it("NaN", function () {
    const resultOfFailedOperations = 7 / "apple";
    expect(true).toBe(
      isNaN(resultOfFailedOperations),
      "what will satisfy the equals assertion?"
    );
    expect(true).toBe(isNaN(resultOfFailedOperations), "is NaN == NaN?");
  });
});
