function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;

          if (index === promises.length - 1) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
}
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

customPromiseAll([promise1, promise2, promise3])
  .then((results) => console.log(results)) // [1, 2, 3]
  .catch((error) => console.error(error));
