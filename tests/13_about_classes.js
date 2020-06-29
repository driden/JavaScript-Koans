describe("About Prototypal Inheritance (topics/about_prototypal_inheritance.js)", function () {
  class User {
    constructor(name, password) {
      this.name = name;
      this.password = password;
    }

    greet() {
      return "Hello, my name is " + this.name;
    }
  }

  class Administrator extends User {
    constructor(name, password) {
      super(name, password);
    }

    greet() {
      return super.greet() + " and I'm an admin";
    }

    static role = "Admin";
  }

  const eric = new User("Eric", "password");
  const john = new Administrator("John", "hardpassword");

  it("defining a 'User' class", function () {
    expect(__).toBe(eric.greet(), "what will Eric say?");
  });

  it("can change a user's password", function () {
    // missing function 'changePassword' in User class!
    eric.changePassword("ericPass");
    expect(eric.password).toBe(
      "ericPass",
      "did you implement 'changePassword' method?"
    );
  });

  it("Administrator Inherits the User class", function () {
    expect(__).toBe(eric instanceof User);
    expect(__).toBe(eric instanceof Administrator);
    expect(__).toBe(john instanceof User);
    expect(__).toBe(john instanceof Administrator);
  });

  it("`greet` is polymorphic", function () {
    expect(__).toBe(john.greet(), "what will John say?");
  });

  it('a class can have a "shared" field', function () {
    expect("Admin").toBe(__, "What do all Administrators have in common?");
  });

  it('a class can have a "shared" method', function () {
    expect("Administrating...").toBe(
      Administrator.__,
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes/static"
    );
  });
});
