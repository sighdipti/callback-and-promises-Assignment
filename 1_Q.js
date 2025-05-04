function sumAsync(a, b, callback) {
    setTimeout(() => {
      const sum = a + b;
      callback(sum);
    }, 1000);
  }

  sumAsync(2, 3, (result) => {
    console.log(`The sum is: ${result}`); // Output: The sum is: 5
  });