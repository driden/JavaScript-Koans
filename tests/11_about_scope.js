describe("About Scope (topics/11_about_scope.js)", () => {
  thisIsAGlobalVariable = 77;

  test("global variables", function () {
    equal(
      __,
      thisIsAGlobalVariable,
      "is thisIsAGlobalVariable defined in this scope?"
    );
  });

  test("variables declared inside of a function", function () {
    let outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function () {
      let innerVariable = "inner";
      expect(__, outerVariable, "is outerVariable defined in this scope?");
      expect(__, innerVariable, "is innerVariable defined in this scope?");
    })();

    equal(__, outerVariable, "is outerVariable defined in this scope?");
    equal(__, typeof innerVariable, "is innerVariable defined in this scope?");
  });
});
