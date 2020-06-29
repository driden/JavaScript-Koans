describe("About Assignment (topics/01_about_assignment.js)", function () {
  it("local variables", function () {
    let temp = 1;
    expect(temp).toBe(1, "Assign a value to the variable temp");
  });

  it("local constant", function () {
    const temp = 1;
    expect(temp).toBe(1, "Assign a value to the variable temp");
  });

  /* global temp */
  /*eslint no-global-assign: "off" */
  {
    // this variable is declared in this scope and used outside
    temp = 1;
  }
  it("global variables", function () {
    expect(temp).toBe(
      1,
      "global variables are assigned to the window object"
    );
  });
});
