// promiseApis.js

// Promise.all
// takes an iterable
// will wait for all to finish (when all are resolved or fulfilled or success)
// will collect the result
// will return iterable (same order) (array of objects)
// will return ERROR as soon as one of the promises gets rejected
// when ERROR occurs, it will not wait for other promises to finish
// #failFast

// Promise.allSettled
// takes an iterable
// will wait for all to finish
// will collect the result
// will return iterable (same order) (array of objects)
// even if one of the promises gets rejected, it will return iterable with resolved/rejected results for each promise
// when ERROR occurs, it will wait for all promises to finish
// #finishEverything

// Promise.race
// takes an iterable
// will not wait for all to finish
// will return the result of the first settled (resolved or rejected) promise
// will return a result value (success or error)
// #finishFast

// Promise.any
// takes an iterable
// will not wait for all to finish
// will return the result of the first resolved (i.e. fulfilled or success) promise
// will return a result
// will ignore promises with rejected (i.e. failed or unsuccessful) results
// if all promises are rejected (all fail) - returned result will return an AggregateError: All promises were rejected. get an (iterable) with err.errors [err1, err2, err3]
// seeking #firstSuccess

p1 = new Promise(
  (resolve, reject) => setTimeout(() => resolve("p1 success"), 3000)
  // (resolve, reject) => setTimeout(() => reject("p1 fail"), 3000)
);
p2 = new Promise(
  (resolve, reject) => setTimeout(() => resolve("p2 success"), 1000)
  // (resolve, reject) => setTimeout(() => reject("p2 fail"), 1000)
);
p3 = new Promise(
  (resolve, reject) => setTimeout(() => resolve("p3 success"), 2000)
  // (resolve, reject) => setTimeout(() => reject("p3 fail"), 2000)
);

// Promise.all([p1, p2, p3])
// Promise.allSettled([p1, p2, p3])
// Promise.race([p1, p2, p3])
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
