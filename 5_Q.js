function multiplyWithCallback(numbers, callback) {
    const multipliedArray = numbers.map((num)=>num*2);
    callback(multipliedArray);
    }
  
  const inputarr = [1, 2, 3, 4, 5];

multiplyWithCallback(inputarr, (result) => {
  console.log(result);
});

// second methood
/* 
function multiplyWithCallback(arr, callback) {
  arr.forEach((element) => {
    callback(element * 2);
  });
}

const arr = [1, 2, 3, 4, 5];

multiplyWithCallback(arr, (result) => {
  console.log(result);
});
*/