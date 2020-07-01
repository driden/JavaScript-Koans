describe("About Promises (topics/14_about_promises.js)", function () {
  // in order to fix these tests, an implementation for 'createPromise' needs
  // to be provided

  const createPromise = function (shouldResolve) {
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve('yay');
      } else {
        reject('nay');
      }
    });
  }

  it("a promise should be of type 'Promise'", function () {
    const myProm = createPromise(true);
    expect(myProm.constructor).toBe(Promise);
  });

  it("a promise should take a function as a parameter", function () {
    const myProm = createPromise(true);
    expect(myProm.constructor.length).toBe(1);
  });

  it("a promise can be 'resolved' to 'yay'", async function () {
    const myProm = createPromise(true);
    await expectAsync(myProm).toBeResolvedTo("yay");
  });

  it("a promise can be 'rejected'", async function () {
    const myProm = createPromise(false);

    await expectAsync(myProm).toBeRejectedWith("nay");
  });
});
