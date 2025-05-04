const arr = [2, 4, 6, 8, 10];

const result = arr.filter((item) => {
  return item > 3; //filter returns value, not undefined like forEach
});
console.log(result);

//to use this in forEach we need to create new empty arr
const resultArr = [];
arr.forEach((num) => {
  if (num > 7) {
    resultArr.push(num);
  }
});
console.log(resultArr);
