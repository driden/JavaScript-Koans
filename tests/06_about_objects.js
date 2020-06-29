describe("About Objects (topics/about_objects.js)", function () {
  it("object type", function () {
    const empty_object = {};
    expect(__).toBe(typeof empty_object, "what is the type of an object?");
  });

  it("object literal notation", function () {
    const person = {
      __: __,
      __: __,
    };

    expect("Amory Blaine").toEqual(person.name, "what is the person's name?");
    expect(102).toBe(person.age, "what is the person's age?");
  });

  it("dynamically adding properties", function () {
    let person = {};
    person.__ = "Amory Blaine";
    person.__ = 102;

    expect("Amory Blaine").toEqual(person.name, "what is the person's name?");
    expect(102).toEqual(person.age, "what is the person's age?");
  });

  it("adding properties from strings", function () {
    let person = {};
    person["__"] = "Amory Blaine";
    person["__"] = 102;

    expect("Amory Blaine").toEqual(person.name, "what is the person's name?");
    expect(102).toEqual(person.age, "what is the person's age?");
  });

  it("adding functions", function () {
    const person = {
      name: "Amory Blaine",
      age: 102,
      toString: function () {
        return __; // HINT: use the 'this' keyword to refer to the person object.
      },
    };

    expect("I Amory Blaine am 102 years old.").toEqual(
      person.toString(),
      "what should the toString function be?"
    );
  });
});
