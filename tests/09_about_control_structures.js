describe("About Control Structures (test/09_about_control_structures.js)", function () {

  it("if", function () {
    let isPositive = false;
    if (2 > 0) {
      isPositive = true;
    }
    expect(isPositive).toBe(__, "what is the value of isPositive?");
  });

  it("for", function () {
    let counter = 10;
    for (let i = 1; i <= 3; i++) {
      counter = counter + i;
    }
    expect(counter).toBe(__, "what is the value of counter?");
  });

  it("for in", function () {
    // this syntax will be explained in about objects
    const person = {
      name: "Amory Blaine",
      age: 102,
    };
    let result = "";
    // for in enumerates the property names of an object
    for (let property_name in person) {
      result = result + property_name;
    }

    expect(result).toBe(__, "what is the value of result?");
  });

  it("ternary operator", function () {
    let fruit = true ? "apple" : "orange";
    expect(fruit).toBe(__, "what is the value of fruit?");

    fruit = false ? "apple" : "orange";
    expect(fruit).toBe(__, "now what is the value of fruit?");
  });

  it("switch", function () {
    let result = 0;
    switch (2) {
      case 1:
        result = 1;
        break;
      case 1 + 1:
        result = 2;
        break;
    }
    expect(result).toBe(__, "what is the value of result?");
  });

  it("switch default case", function () {
    let result = "Pippin";
    switch ("m") {
      case "f":
        result = "Frodo";
        break;
      case "s":
        result = "Samwise";
        break;
      default:
        result = "Merry";
        break;
    }
    expect(result).toBe(__, "what is the value of result?");
  });

  it("null coalescing", function () {
    let result = null || "a value";
    expect(result).toBe(__, "what is the value of result?");
  });
});
