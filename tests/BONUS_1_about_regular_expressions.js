describe("About Regular Expressions (topics/BONUS_1_about_regular_expressions.js)", () => {
  it("exec", function () {
    let numberFinder = /(\d).*(\d)/;
    let results = numberFinder.exec("what if 6 turned out to be 9?");
    expect(results.slice(0, 3)).toEqual(
      ["6 turned out to be 9", "6", "9"],
      "what is the value of results?"
    );
  });

  it("it", function () {
    let containsSelect = /select/.test("select * from users ");
    expect(true).toBe(
      containsSelect,
      'does the string provided contain "select"?'
    );
  });

  it("match", function () {
    let matches = "what if 6 turned out to be 9?".match(/(\d)/g);
    expect(matches).toEqual(["6", "9"], "what is the value of matches?");
  });

  it("replace", function () {
    let pie = "apple pie".replace("apple", "strawberry");
    expect("strawberry pie").toBe(pie, "what is the value of pie?");

    pie = "what if 6 turned out to be 9?".replace(/\d/g, function (number) {
      // the second parameter can be a string or a function
      let map = { "6": "six", "9": "nine" };
      return map[number];
    });
    expect("what if six turned out to be nine?").toBe(
      pie,
      "what is the value of pie?"
    );
  });
});
