describe("About Numbers (topics/about_numbers.js)", function () {
  it("types", function () {
    let typeOfIntegers = typeof 6;
    let typeOfFloats = typeof 3.14159;
    expect(__).toEqual(
      typeOfIntegers === typeOfFloats,
      "are ints and floats the same type?"
    );
    expect(__).toBe(typeOfIntegers, "what is the javascript numeric type?");
    expect(__).toBe(1.0, "what is a integer number equivalent to 1.0?");
  });

  it("NaN", function () {
    const resultOfFailedOperations = 7 / "apple";
    expect(__).toBe(
      isNaN(resultOfFailedOperations),
      "what will satisfy the equals assertion?"
    );
    expect(__).toBe(resultOfFailedOperations == NaN, "is NaN == NaN?");
  });
});
