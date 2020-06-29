describe("About Arrays (tests/05_about_arrays.js)", function () {
  it("array lfiteral syntax and indexing", function () {
    // note that array elements do not have to be of the same type
    var favouriteThings = ["cellar door", 42, true];
    expect(__).toBe(
      favouriteThings[0],
      "what is in the first position of the array?"
    );
    expect( __).toBe(
      favouriteThings[1],
      "what is in the second position of the array?"
    );
    expect( __).toBe(
      favouriteThings[2],
      "what is in the third position of the array?"
    );
  });

  it("array type", function () {
    expect(__).toBe(typeof [], "what is the type of an array?");
  });

  it("length", function () {
    var collection = ["a", "b", "c"];
    expect( __).toBe(
      collection.length,
      "what is the length of the collection array?"
    );
  });

  it("splice", function () {
    var daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    var workingWeek = daysOfWeek.splice(__, __);
    var weekend = daysOfWeek;

    expect(
      workingWeek).toEqual(
      ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "what is the value of workingWeek?"
    );
    expect(
      weekend).toEqual(
      ["Saturday", "Sunday"],
      "what is the value of weekend?"
    );
  });

  it("stack methods", function () {
    var stack = [];
    stack.push("first");
    stack.push("second");

    expect(
      __).toBe(
      stack.pop(),
      "what will be the first value popped off the stack?"
    );

    expect(
      __).toBe(
      stack.pop(),
      "what will be the second value popped off the stack?"
    );
  });

  it("queue methods", function () {
    var queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    expect(__).toBe( queue.shift(), "what will be shifted out first?");
    expect(__).toBe( queue.shift(), "what will be shifted out second?");
  });
});
