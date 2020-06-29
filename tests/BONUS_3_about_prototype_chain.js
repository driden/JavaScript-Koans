describe("About Prototype Chain (topics/BONUS_03_about_prototype_chain.js)", function () {
  const father = {
    b: 3,
    c: 4,
  };

  let child = Object.create(father);
  child.a = 1;
  child.b = 2;

  /*
   * ---------------------- ---- ---- ----
   *                      [a]  [b]  [c]
   * ---------------------- ---- ---- ----
   * [child]               1    2
   * ---------------------- ---- ---- ----
   * [father]                   3    4
   * ---------------------- ---- ---- ----
   * [Object.prototype]
   * ---------------------- ---- ---- ----
   * [null]
   * ---------------------- ---- ---- ----
   * */

  it("Is there an 'a' and 'b' own property on child?", function () {
    expect(__).toBe(child.hasOwnProperty("a"), "child.hasOwnProperty('a')?");
    expect(__).toBe(child.hasOwnProperty("b"), "child.hasOwnProperty('b')?");
  });

  it("Is there an 'a' and 'b' property on child?", function () {
    expect(__).toBe(child.a, "what is 'a' value?");
    expect(__).toBe(child.b, "what is 'b' value?");
  });

  it("If 'b' was removed, whats b value?", function () {
    delete child.b;
    expect(__).toBe(child.b, "what is 'b' value now?");
  });

  it("Is there a 'c' own property on child?", function () {
    expect(__).toBe(child.hasOwnProperty("c"), "child.hasOwnProperty('c')?");
  });

  // Is there a 'c' own property on child? No, check its prototype
  // Is there a 'c' own property on child.[[Prototype]]? Yes, its value is...
  it("Is there a 'c' property on child?", function () {
    expect(__).toBe(child.c, "what is the value of child.c?");
  });

  // Is there a 'd' own property on child? No, check its prototype
  // Is there a 'd' own property on child.[[Prototype]]? No, check it prototype
  // child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
  it("Is there an 'd' property on child?", function () {
    expect(__).toBe(child.d, "what is the value of child.d?");
  });
});
