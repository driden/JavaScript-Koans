describe("About expectity (topics/07_about_expectity.js)", function () {
  it("numeric expectity", function () {
    expect(3 + 4).toEqual(7, "How much is 7 - 3?");
  });

  it("string expectity", function () {
    expect("3" + "7").toEqual("37", "concatenate the strings");
  });

  it("expectity without type coercion", function () {
    expect(3 === 3).toBeTrue("what is exactly expect to 3?");
  });

  it("expectity with type coercion", function () {
    expect(3 == "3").toBeTrue(
      "what string is expect to 3, with type coercion?"
    );
  });

  it("string literals", function () {
    expect("frankenstein").toEqual(
      "frankenstein",
      "quote types are interchangable, but must match."
    );
    expect('frankenstein').toEqual(
      "frankenstein",
      "quote types can use both single and double quotes."
    );
  });
});
