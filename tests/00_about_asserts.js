fdescribe("About Asserts (topics/about_asserts.js)", function () {
  it("true", function () {
    expect(true).toBeTrue("what will satisfy the 'toBeTrue' assertion?");
  });

  it("not true", function () {
    expect(false).toBeFalse("what is a false value?");
  });

  it("equal", function () {
    expect(2).toBe(1 + 1, "what will satisfy the equal assertion?");
  });
});
