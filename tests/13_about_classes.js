describe("About classes (topics/13_about_classes.js)", function () {
  class User {
    constructor(name, password) {
      this.name = name;
      this.password = password;
    }

    greet() {
      return "Hello, my name is " + this.name;
    }

    changePassword(newPass) {
      this.password = newPass;
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
    static administrate = () => "Administrating...";
  }

  const eric = new User("Eric", "password");
  const john = new Administrator("John", "hardpassword");

  it("defining a 'User' class", function () {
    expect("Hello, my name is Eric").toBe(eric.greet(), "what will Eric say?");
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
    expect(true).toBe(eric instanceof User);
    expect(false).toBe(eric instanceof Administrator);
    expect(true).toBe(john instanceof User);
    expect(true).toBe(john instanceof Administrator);
  });

  it("`greet` is polymorphic", function () {
    expect("Hello, my name is John and I'm an admin").toBe(john.greet(), "what will John say?");
  });

  it('a class can have a "shared" field', function () {
    expect("Admin").toBe(Administrator.role, "What do all Administrators have in common?");
  });

  it('a class can have a "shared" method', function () {
    expect("Administrating...").toBe(
      Administrator.administrate(),
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes/static"
    );
  });
});
