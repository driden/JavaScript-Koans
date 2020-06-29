describe("About Truthyness (topics/04_about_truthyness.js)", function () {
  it("truthyness of positive numbers", function () {
    const oneIsTruthy = 1 ? true : false;
    expect(true).toEqual(oneIsTruthy, "is one truthy?");
  });

  it("truthyness of negative numbers", function () {
    const negativeOneIsTruthy = -1 ? true : false;
    expect(true).toEqual(negativeOneIsTruthy, "is -1 truthy?");
  });

  it("truthyness of zero", function () {
    const zeroIsTruthy = 0 ? true : false;
    expect(false).toEqual(zeroIsTruthy, "is 0 truthy?");
  });

  it("truthyness of null", function () {
    const nullIsTruthy = null ? true : false;
    expect(false).toEqual(nullIsTruthy, "is null truthy?");
  });
});
