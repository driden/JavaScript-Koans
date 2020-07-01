describe("About Prototypal Inheritance (topics/BONUS_4_about_prototypal_inheritance.js)", function () {
  // this 'class' pattern defines a class by its constructor
  let Mammal = function (name) {
    this.name = name;
  };
  // things that don't need to be set in the constructor should be added to the constructor's prototype property.
  Mammal.prototype = {
    sayHi: function () {
      return "Hello, my name is " + this.name;
    },
  };

  it("defining a 'class'", function () {
    let eric = new Mammal("Eric");
    expect("Hello, my name is Eric").toBe(eric.sayHi(), "what will Eric say?");
  });

  // add another function to the Mammal 'type' that uses the sayHi function
  Mammal.prototype.favouriteSaying = function () {
    return this.name + "'s favourite saying is " + this.sayHi();
  };

  it("more functions", function () {
    let bobby = new Mammal("Bobby");
    expect("Bobby's favourite saying is Hello, my name is Bobby").toBe(
      bobby.favouriteSaying(),
      "what is Bobby's favourite saying?"
    );
  });

  it("calling functions added to a prototype after an object was created", function () {
    let paul = new Mammal("Paul");
    Mammal.prototype.numberOfLettersInName = function () {
      return this.name.length;
    };
    // the following statement asks the paul object to call a function that was added
    // to the Mammal prototype after paul was constructed.
    expect(4).toBe(paul.numberOfLettersInName(), "how long is Paul's name?");
  });

  // helper function for inheritance.
  // From https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_Revisited
  function extend(child, supertype) {
    child.prototype = supertype.prototype;
  }

  // "Subclass" Mammal
  function Bat(name, wingspan) {
    Mammal.call(this, name);
    this.wingspan = wingspan;
  }

  // configure inheritance
  extend(Bat, Mammal);

  it("Inheritance", function () {
    let lenny = new Bat("Lenny", "1.5m");
    expect("Hello, my name is Lenny", lenny.sayHi(), "what does Lenny say?");
    expect("1.5m", lenny.wingspan, "what is Lenny's wingspan?");
  });
});
