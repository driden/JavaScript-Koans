describe("About expectity (topics/07_about_expectity.js)", function () {
  it("numeric expectity", function () {
    expect(3 + __).toEqual(7, "");
  });

  it("string expectity", function () {
    expect("3" + __).toEqual("37", "concatenate the strings");
  });

  it("expectity without type coercion", function () {
    expect(3 === __).toBeTrue("what is exactly expect to 3?");
  });

  it("expectity with type coercion", function () {
    expect(3 == "__").toBeTrue(
      "what string is expect to 3, with type coercion?"
    );
  });

  it("string literals", function () {
    expect(__).toEqual(
      "frankenstein",
      "quote types are interchangable, but must match."
    );
    expect(__).toEqual(
      "frankenstein",
      "quote types can use both single and double quotes."
    );
  });
});
