describe("About Scope (topics/11_about_scope.js)", () => {
  thisIsAGlobalVariable = 77;

  it("global variables", function () {
    expect(77).toBe(
      thisIsAGlobalVariable,
      "is thisIsAGlobalVariable defined in this scope?"
    );
  });

  it("variables declared inside of a function", function () {
    let outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function () {
      let innerVariable = "inner";
      expect("outer").toBe(outerVariable, "is outerVariable defined in this scope?");
      expect("inner").toBe(innerVariable, "is innerVariable defined in this scope?");
    })();

    expect("outer").toBe(outerVariable, "is outerVariable defined in this scope?");
    expext(undefined).toBe(typeof innerVariable, "is innerVariable defined in this scope?");
  });
});
