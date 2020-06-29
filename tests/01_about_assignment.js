describe("About Assignment (topics/about_assignment.js)", function () {
  it("local variables", function () {
    let temp = __;
    expect(temp).toBe(1, "Assign a value to the variable temp");
  });

  it("local constant", function () {
    const temp = __;
    expect(temp).toBe(1, "Assign a value to the variable temp");
  });

  it("global variables", function () {
    temp = 1; // Not using let is an example. Always use let/const in practise.
    expect(window.__).toBe(
      temp,
      "global variables are assigned to the window object"
    );
  });
});
