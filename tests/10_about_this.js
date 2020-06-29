describe("About this (topics/about_this.js)", () => {
  it("'this' inside a method", function () {
    const person = {
      name: "bob",
      intro: function () {
        return "Hello, my name is " + this.__;
      },
    };
    expect(person.intro()).toEqual(
      "Hello, my name is bob",
      "If an object has a method can you access properties inside it?"
    );
  });

  it("'this' on unattached function", function () {
    const person = {
      globalName: "bob",
      intro: function () {
        return "Hello, my name is " + this.globalName;
      },
    };

    const alias = person.intro;

    // if the function is not called as an object property 'this' is the global context
    // (window in a browser). This is an example. Please do not do this in practise.
    window.__ = "Peter";
    expect(alias()).toEqual(
      "Hello, my name is Peter",
      "What does 'this' refer to when it is not part of an object?"
    );
  });

  it("'this' set explicitly", function () {
    const person = {
      name: "bob",
      intro: function () {
        return "Hello, my name is " + this.name;
      },
    };

    // calling a function with 'call' lets us assign 'this' explicitly
    const message = person.intro.call({ __: "Frank" });
    expect(message).toEqual(
      "Hello, my name is Frank",
      "What does 'this' refer to when you use the 'call()' method?"
    );
  });

  // extra credit: underscore.js has a 'bind' function http://documentcloud.github.com/underscore/#bind
  // read the source and see how it is implemented
});
