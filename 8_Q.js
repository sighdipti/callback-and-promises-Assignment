/**
 * Returns the result of the first promise that resolves or rejects.
 * 
 * @param {Promise[]} promises - An array of promises.
 * @returns {Promise} A promise that resolves or rejects with the result of the first promise to settle.
 */
function racePromises(promises) {
    return Promise.race(promises);
}

// Example usage:
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 rejected'), 1000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
});

racePromises([promise1, promise2, promise3])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));