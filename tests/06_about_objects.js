describe("About Objects (topics/06_about_objects.js)", function () {
  it("object type", function () {
    const empty_object = {};
    expect("object").toBe(typeof empty_object, "what is the type of an object?");
  });

  it("object literal notation", function () {
    const person = {
      name: "Amory Blaine",
      age: 102,
    };

    expect("Amory Blaine").toEqual(person.name, "what is the person's name?");
    expect(102).toBe(person.age, "what is the person's age?");
  });

  it("dynamically adding properties", function () {
    let person = {};
    person.name = "Amory Blaine";
    person.age = 102;

    expect("Amory Blaine").toEqual(person.name, "what is the person's name?");
    expect(102).toEqual(person.age, "what is the person's age?");
  });

  it("adding properties from strings", function () {
    let person = {};
    person["name"] = "Amory Blaine";
    person["age"] = 102;

    expect("Amory Blaine").toEqual(person.name, "what is the person's name?");
    expect(102).toEqual(person.age, "what is the person's age?");
  });

  it("adding functions", function () {
    const person = {
      name: "Amory Blaine",
      age: 102,
      toString: function () {
        return "I " + this.name + " am " + this.age + " years old."; // HINT: use the 'this' keyword to refer to the person object.
      },
    };

    expect("I Amory Blaine am 102 years old.").toEqual(
      person.toString(),
      "what should the toString function be?"
    );
  });
});
