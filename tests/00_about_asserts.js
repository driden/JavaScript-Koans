describe("About Asserts (topics/about_asserts.js)", function () {
  it("true", function () {
    expect(true).toBeTrue("what will satisfy the 'toBeTrue' assertion?");
  });

  it("not true", function () {
    expect(__).toBeFalse("what is a false value?");
  });

  it("equal", function () {
    expect(__).toBe(1 + 1, "what will satisfy the equal assertion?");
  });
});
