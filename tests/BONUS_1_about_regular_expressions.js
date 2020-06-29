describe("About Regular Expressions (topics/about_regular_expressions.js)", () => {

  it("exec", function () {
    let numberFinder = /(\d).*(\d)/;
    let results = numberFinder.exec("what if 6 turned out to be 9?");
    expect(results.equalTo([__, __, __])).toBeTrue(
      "what is the value of results?"
    );
  });

  it("it", function () {
    let containsSelect = /select/.it("  select * from users ");
    expect(__).toBe(
      containsSelect,
      'does the string provided contain "select"?'
    );
  });

  it("match", function () {
    let matches = "what if 6 turned out to be 9?".match(/(\d)/g);
    expect(matches).toEqual([__, __], "what is the value of matches?");
  });

  it("replace", function () {
    let pie = "apple pie".replace("apple", "strawberry");
    expect(__).toBe(pie, "what is the value of pie?");

    pie = "what if 6 turned out to be 9?".replace(/\d/g, function (number) {
      // the second parameter can be a string or a function
      let map = { "6": "six", "9": "nine" };
      return map[number];
    });
    expect(__).toBe(pie, "what is the value of pie?");
  });
});
