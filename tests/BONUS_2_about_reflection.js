describe("About Reflection (topics/about_reflection.js)", function () {
  function A() {
    this.aprop = "A";
  }

  function B() {
    this.bprop = "B";
  }

  B.prototype = new A();

  it("typeof", function () {
    expect(__).toEqual(typeof {}, "what is the type of an empty object?");
    expect(__).toEqual(typeof "apple", "what is the type of a string?");
    expect(__).toEqual(typeof -5, "what is the type of -5?");
    expect(__).toEqual(typeof false, "what is the type of false?");
  });

  it("property enumeration", function () {
    let keys = [];
    let values = [];
    const person = { name: "Amory Blaine", age: 102, unemployed: true };
    for (let propertyName in person) {
      keys.push(propertyName);
      values.push(person[propertyName]);
    }
    expect(keys).toEqual(
      ["__", "__", "__"],
      "what are the property names of the object?"
    );
    expect(values).toEqual(
      ["__", __, __],
      "what are the property values of the object?"
    );
  });

  it("hasOwnProperty", function () {
    let b = new B();
    let propertyName;

    let keys = [];
    for (propertyName in b) {
      keys.push(propertyName);
    }
    expect(__).toEqual(keys.length, "how many elements are in the keys array?");
    expect([__, __]).toBe(keys, "what are the properties of the array?");

    // hasOwnProperty returns true if the parameter is a property directly on the object,
    // but not if it is a property accessible via the prototype chain.
    let ownKeys = [];
    for (propertyName in b) {
      if (b.hasOwnProperty(propertyName)) {
        ownKeys.push(propertyName);
      }
    }
    expect(__).toEqual(
      ownKeys.length,
      "how many elements are in the ownKeys array?"
    );
    expect([__]).toBe(ownKeys, "what are the own properties of the array?");
  });

  it("constructor property", function () {
    const a = new A();
    const b = new B();
    expect(__).toEqual(
      typeof a.constructor,
      "what is the type of a's constructor?"
    );
    expect(__).toEqual(
      a.constructor.name,
      "what is the name of a's constructor?"
    );
    expect(__).toEqual(
      b.constructor.name,
      "what is the name of b's constructor?"
    );
  });

  it("eval", function () {
    // eval executes a string
    let result = "";
    eval("result = 'apple' + ' ' + 'pie'");
    expect(__).toBe(result, "what is the value of result?");
  });
});
